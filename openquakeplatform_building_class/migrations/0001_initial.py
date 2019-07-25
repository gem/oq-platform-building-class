# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ClassificationHead',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('country', models.CharField(max_length=3)),
                ('occupancy', models.IntegerField()),
                ('notes', models.CharField(max_length=1024)),
                ('last_mod', models.DateTimeField()),
                ('freq_type', models.IntegerField(choices=[(0, b'qualitative'), (1, b'quantitative')])),
                ('vers', models.CharField(max_length=16)),
                ('owner', models.ForeignKey(related_name='openquakeplatform_building_class_classificationhead_owner', verbose_name='owner', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ClassificationRow',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('path', models.CharField(max_length=1024)),
                ('urban', models.IntegerField(choices=[(0, b'inex'), (1, b'rare'), (2, b'modr'), (3, b'freq'), (4, b'very')])),
                ('urban_quan', models.FloatField()),
                ('rural', models.IntegerField(choices=[(0, b'inex'), (1, b'rare'), (2, b'modr'), (3, b'freq'), (4, b'very')])),
                ('rural_quan', models.FloatField()),
                ('vers', models.CharField(max_length=16)),
                ('head', models.ForeignKey(to='openquakeplatform_building_class.ClassificationHead')),
                ('owner', models.ForeignKey(related_name='openquakeplatform_building_class_classificationrow_owner', verbose_name='owner', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='UserSettings',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(help_text='name of the responsible person: surname, given name, title separated by a delimiter', max_length=255, null=True, verbose_name='Individual Name', blank=True)),
                ('organization', models.CharField(help_text='name of the responsible organization', max_length=255, null=True, verbose_name='Organization Name', blank=True)),
                ('position', models.CharField(help_text='role or position of the responsible person', max_length=255, null=True, verbose_name='Position Name', blank=True)),
                ('publish_info', models.BooleanField(help_text='Would you like your contribution to be acknowledged in future documentation (eg. technical reports, scientific papers in peer reviewed journals, ...) ?<br>\nIf you answer <b>no</b>, you will not appear in the contributors list and your contribution will remain anonymous.<br>\n          If you answer <b>yes</b>, please let us know how you prefer to be mentioned by adding your credentials', choices=[(True, b'Yes'), (False, b'No')])),
                ('owner', models.ForeignKey(related_name='openquakeplatform_building_class_usersettings_owner', verbose_name='owner', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
