#
# Copyright (c) 2017, GEM Foundation.
#
# This program is free software: you can redistribute it and/or modify
# under the terms of the GNU Affero General Public License as published
# by the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.


from django.shortcuts import render_to_response
from django.template import RequestContext
from openquakeplatform.vulnerability.models import Country
from django.utils.cache import add_never_cache_headers
from django.core.serializers.json import DjangoJSONEncoder
import json
from django.http import (HttpResponse)
from django.db import transaction

from models import (UserSettings, ClassificationHead, ClassificationRow,
                    FREQ_TYPE, FREQUENCY_TYPE,
                    FREQ_QUAL_TYPE, FREQUENCY_QUAL_TYPE, OCCUPACY_TYPE)
from django.utils import timezone

dataset_version = "0.9"


def __user_settings_manager(request, user_settings_ctx, **kwargs):
    if not user_settings_ctx:
        publish_info = ''
        not_publish_info = 'checked = "checked"'
    else:
        if user_settings_ctx.publish_info:
            publish_info = 'checked = "checked"'
            not_publish_info = ''
        else:
            publish_info = ''
            not_publish_info = 'checked = "checked"'

    return render_to_response(
        "building-class/user-settings.html",
        dict(none=None,
             publish_info=publish_info,
             not_publish_info=not_publish_info),
        context_instance=RequestContext(request))

_occupancies_dict = dict(OCCUPACY_TYPE)

def _occupancies_decode(occupancy):
    print _occupancies_dict
    occupancies = []
    for i in range(0, len(OCCUPACY_TYPE)):
        if occupancy & (2**i):
            occupancies.append(_occupancies_dict[2**i])
            # add a break to manage single value (from checkbox to radio)
            break

    return occupancies

def _occupancies_encode(occupancies):
    occupancy = 0
    for k in _occupancies_dict.keys():
        if _occupancies_dict[k] in occupancies:
            occupancy += k
            # add a break to manage single value (from checkbox to radio)
            break

    return occupancy

def user_settings(request, **kwargs):
    user_settings_ctx = UserSettings.objects.get(owner_id=request.user.pk)

    return __user_settings_manager(request, user_settings_ctx, **kwargs)

# English version:    https://youtu.be/bXrvc9Qzie4
# Portuguese version: https://youtu.be/JFLw3cdy5oY
# Turkish version:    https://www.youtube.com/watch?v=EPG7pU6Z--0
#                     https://www.youtube.com/embed/EPG7pU6Z--0
# Spanish version:    https://youtu.be/HiFFZ46fZAs

def _preferred_tut_lang(langs_in):
    print langs_in
    valid_langs = ['en', 'pt', 'tr', 'es' ]
    langs = []

    for lang in langs_in.split(','):
        weight=1.0
        lname=""
        for atom in lang.split(';'):
            if atom.strip()[0:2] == 'q=':
                weight = float(atom.strip()[2:])
            else:
                lname=atom.strip().split('-')[0]

        # print "LANG: %s  WEIGHT: %g" % (lname, weight)
        langs.append((lname, weight))

    langs = sorted(langs, key=lambda lang: lang[1], reverse=True)

    for lang in langs:
        lname = lang[0]
        print lname
        if lname in valid_langs:
            print "RETURN: %s" % lname
            return lname
    else:
        print "DEF RETURN: en"
        return 'en'

def tutorial(request, **kwargs):
    lang = _preferred_tut_lang(request.META.get('HTTP_ACCEPT_LANGUAGE', 'en'))

    return render_to_response(
        "building-class/building-class-tutorial.html",
        dict(next=request.get_full_path(), lang=lang),
        context_instance=RequestContext(request))


def view(request, **kwargs):
    success_msg = ''
    error_msg = ''
    if not request.user.is_authenticated():
        return render_to_response(
            "building-class/building-class-not-auth.html",
            dict(next=request.get_full_path(),),
            context_instance=RequestContext(request))

    try:
        user_settings = UserSettings.objects.get(owner_id=request.user.pk)
    except:
        user_settings = None

    if request.method == 'POST' and request.POST.get('user_settings', '')  == 'true':
        try:
            if not user_settings:
                user_settings = UserSettings(owner_id=request.user.pk,
                                             publish_info=(request.POST.get('pub_info', 'no') == 'yes'))
                user_settings.save()
            else:
                user_settings.publish_info = (request.POST.get('pub_info', 'no') == 'yes')
                user_settings.save()
            success_msg = 'User settings saved correctly.'
        except Exception as e:
            error_msg = 'User settings save failed (%s)'  % e

    if not user_settings:
        return __user_settings_manager(request, None, **kwargs)


    countries_opts = ""
    for country in Country.objects.all().order_by('name'):
        if not country.is_visible:
            continue
        countries_opts += '<option value="%s">%s</option>\n' % (country.iso3, country.name)

    classifications = []
    heads = ClassificationHead.objects.filter(owner_id=request.user.pk).order_by("id")
    for head in heads:
        occupancies = _occupancies_decode(head.occupancy)
        classification = { "country": head.country, "freq_type": dict(FREQUENCY_TYPE)[head.freq_type],
                           "occupancies": occupancies,
                           "notes": head.notes, "build_classes": [],
                           "vers": head.vers}
        rows = ClassificationRow.objects.filter(owner_id=request.user.pk, head_id=head.pk)
        for row in rows:
            build_class = { "path": row.path,
                            "urban": dict(FREQUENCY_QUAL_TYPE)[row.urban],
                            "urban_quan": row.urban_quan,
                            "rural": dict(FREQUENCY_QUAL_TYPE)[row.rural],
                            "rural_quan": row.rural_quan,
                            "vers": row.vers}
            classification["build_classes"].append(build_class)
        classifications.append(classification)
    classifications_ser = json.dumps(classifications)

    return render_to_response(
        "building-class/building-class.html",
        dict(success_msg=success_msg,
             error_msg=error_msg,
             countries_opts=countries_opts,
             classifications=classifications_ser
             ),
        context_instance=RequestContext(request))

def _freq_type2int(id):
    return getattr(FREQ_TYPE, "_" + id.upper())

def _freq_qual_type2int(id):
    return getattr(FREQ_QUAL_TYPE, "_" + id.upper())

def _errlog_shortheader(iso3, occup):
    return "<b>Country</b>: %s - <b>Occupancy</b>: %s\n" % (
        Country.objects.get(iso3=iso3).name,
        ', '.join(map(str, occup)))

def _errlog_longheader(iso3, occup, cls):
    return "%s<b>Type</b>: %s\n" % (
        _errlog_shortheader(iso3, occup),
        ' | '.join(map(lambda x: str(x).strip(), reversed(cls.split('|')))))

@transaction.commit_manually
def data(request, **kwargs):
    # request.is_ajax() if not exit
    if not request.user.is_authenticated():
        print "TODO: manage not auth"
        return

    dt = json.loads(request.body)
    try:
        ClassificationHead.objects.filter(owner_id=request.user.pk).delete()
        for classification in dt['classifications']:
            urban_quan_tot = 0
            rural_quan_tot = 0

            freq_type = _freq_type2int(classification['freq_type'])
            head = ClassificationHead(owner_id=request.user.pk, country=classification['country'],
                                      freq_type=freq_type,
                                      occupancy=_occupancies_encode(classification['occupancies']),
                                      notes=classification['notes'], last_mod=timezone.now(),
                                      vers=dataset_version)
            head.save()
            for bc in classification['build_classes']:
                try:
                    urban_quan = float(bc['urban_quan'])
                except ValueError:
                    urban_quan = 0

                try:
                    rural_quan = float(bc['rural_quan'])
                except ValueError:
                    rural_quan = 0

                if urban_quan < 0.0 or urban_quan > 1.0:
                    raise ValueError("%s<b>Error:</b>'urban' frequency out of range" % (
                            _errlog_longheader(classification['country'], classification['occupancies'],
                            bc['path'])))
                if rural_quan < 0.0 or rural_quan > 1.0:
                    raise ValueError("%s<b>Error:</b>'rural' frequency out of range" % (
                            _errlog_longheader(classification['country'], classification['occupancies'],
                            bc['path'])))

                urban_quan_tot += urban_quan
                rural_quan_tot += rural_quan

                row = ClassificationRow(owner_id=request.user.pk, head_id=head.pk, path=bc['path'],
                                        urban=_freq_qual_type2int(bc['urban']),
                                        urban_quan=urban_quan,
                                        rural=_freq_qual_type2int(bc['rural']),
                                        rural_quan=rural_quan,
                                        vers=dataset_version)
                row.save()

            if classification['freq_type'] == 'quantitative' and (urban_quan_tot != 1 or rural_quan_tot != 1):
                raise ValueError("%s<b>Error:</b> '%s' frequencies sum is %3.3f instead of 1.0" % (
                    _errlog_shortheader(classification['country'], classification['occupancies']),
                    ('urban' if urban_quan_tot != 1 else 'rural'),
                    (urban_quan_tot if urban_quan_tot != 1 else rural_quan_tot)))

        transaction.commit()
        resp = { 'ret': 0,
            'ret_s': 'success' }

    except Exception as e:
        transaction.rollback()
        resp = { 'ret': 1,
            'ret_s': str(e) }

    response = HttpResponse(
        json.dumps(resp, cls=DjangoJSONEncoder),
        mimetype='application/javascript'
    )
    add_never_cache_headers(response)
    return response






