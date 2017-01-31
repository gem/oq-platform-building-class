# Copyright (c) 2012-2015, GEM Foundation.
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

from django.contrib.gis.db import models
from django_extras.contrib.auth.models import SingleOwnerMixin

CHMAX = 1024

class FREQ_TYPE(object):
    _INEX = 0
    _RARE = 1
    _MODR = 2
    _FREQ = 3
    _VERY = 4

FREQUENCY_TYPE = (
    (FREQ_TYPE._INEX, 'inex'),
    (FREQ_TYPE._RARE, 'rare'),
    (FREQ_TYPE._MODR, 'modr'),
    (FREQ_TYPE._FREQ, 'freq'),
    (FREQ_TYPE._VERY, 'very')
    )

class OCCUP_TYPE(object):
    _RESIDENTIAL  =  1
    _COMMERCIAL   =  2
    _INDUSTRIAL   =  4
    _EDUCATIONAL  =  8
    _HEALTHCARE   = 16
    _GOVERNMENTAL = 32

OCCUPACY_TYPE = (
    (OCCUP_TYPE._RESIDENTIAL,  'residential'),
    (OCCUP_TYPE._COMMERCIAL,   'commercial'),
    (OCCUP_TYPE._INDUSTRIAL,   'industrial'),
    (OCCUP_TYPE._EDUCATIONAL,  'educational'),
    (OCCUP_TYPE._GOVERNMENTAL, 'governmental')
    )

class UserSettings(SingleOwnerMixin, models.Model):
    publish_info = models.BooleanField()

class ClassificationHead(SingleOwnerMixin, models.Model):
    country = models.CharField(max_length=3)
    occupancy = models.IntegerField()
    notes = models.CharField(max_length=CHMAX)
    last_mod = models.DateTimeField()
    vers = models.CharField(max_length=16)

    def __unicode__(self):
        return self.country

class ClassificationRow(SingleOwnerMixin, models.Model):
    head = models.ForeignKey('ClassificationHead', on_delete=models.CASCADE)
    path = models.CharField(max_length=CHMAX)
    urban = models.IntegerField(choices=FREQUENCY_TYPE)
    rural = models.IntegerField(choices=FREQUENCY_TYPE)
    vers = models.CharField(max_length=16)
