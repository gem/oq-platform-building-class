# -*- coding: utf-8 -*-
# vim: tabstop=4 shiftwidth=4 softtabstop=4

# Copyright (c) 2010-2013, GEM Foundation.
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public
#    License along with this program. If not, see
#    <https://www.gnu.org/licenses/agpl.html>.

from django.conf.urls import patterns, url
from openquakeplatform_building_class import views

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns(
    '',
    url(r'^$', views.view, name='home'),
    url(r'^/account/login/?next=/building-class/$', views.view, name='account_login'),
    url(r'^tutorial$', views.tutorial, name='tutorial'),
    url(r'^user-settings$', views.user_settings, name='user-settings'),
    url(r'^data$', views.data, name='data'),
)
