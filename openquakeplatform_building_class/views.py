#
# Copyright (c) 2016, GEM Foundation.
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
from django.http import HttpResponse
from django.db import transaction

from models import ClassificationHead, ClassificationRow, FREQ_TYPE, FREQUENCY_TYPE
from django.utils import timezone

dataset_version = "0.9"

def view(request, **kwargs):
    if not request.user.is_authenticated():
        return render_to_response(
            "building-class/building-class-not-auth.html",
            dict(none=None),
            context_instance=RequestContext(request))

    countries_opts = ""
    for country in Country.objects.all().order_by('name'):
        if not country.is_visible:
            continue
        countries_opts += '<option value="%s">%s</option>\n' % (country.iso3, country.name)

    classifications = []
    heads = ClassificationHead.objects.filter(owner_id=request.user.pk).order_by("id")
    for head in heads:
        classification = { "country": head.country, "notes": head.notes, "build_classes": [],
                           "vers": head.vers}
        rows = ClassificationRow.objects.filter(owner_id=request.user.pk, head_id=head.pk)
        for row in rows:
            build_class = { "path": row.path,
                            "rural": dict(FREQUENCY_TYPE)[row.rural],
                            "urban": dict(FREQUENCY_TYPE)[row.urban],
                            "vers": row.vers}
            classification["build_classes"].append(build_class)
        classifications.append(classification)
    classifications_ser = json.dumps(classifications)

    return render_to_response(
        "building-class/building-class.html",
        dict(countries_opts=countries_opts,
             classifications=classifications_ser
             ),
        context_instance=RequestContext(request))


def ft2int(id):
    return getattr(FREQ_TYPE, "_" + id.upper())


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
            head = ClassificationHead(owner_id=request.user.pk, country=classification['country'],
                                      notes=classification['notes'], last_mod=timezone.now(),
                                      vers=dataset_version)
            head.save()
            for bc in classification['build_classes']:
                row = ClassificationRow(owner_id=request.user.pk, head_id=head.pk, path=bc['path'],
                                        rural=ft2int(bc['rural']), urban=ft2int(bc['urban']),
                                        vers=dataset_version)
                row.save()

        transaction.commit()
        resp = { 'ret': 0,
            'ret_s': 'success' }

    except Exception as e:
        transaction.rollback()
        resp = { 'ret': 1,
            'ret_s': e }

    response = HttpResponse(
        json.dumps(resp, cls=DjangoJSONEncoder),
        mimetype='application/javascript'
    )
    add_never_cache_headers(response)
    return response






