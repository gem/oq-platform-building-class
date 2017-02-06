import os
import sys
import re
from setuptools import find_packages, setup

def get_version():
    version_re = r"^__version__\s+=\s+['\"]([^'\"]*)['\"]"
    version = None

    package_init = 'openquakeplatform_building_class/__init__.py'
    for line in open(package_init, 'r'):
        version_match = re.search(version_re, line, re.M)
        if version_match:
            version = version_match.group(1)
            break
    else:
        sys.exit('__version__ variable not found in %s' % package_init)

    return version

version = get_version()



with open(os.path.join(os.path.dirname(__file__), 'README.rst')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='oq-platform-building-class',
    version=version,
#    packages=find_packages(),
    packages=["openquakeplatform_building_class"],
    include_package_data=True,
    license='AGPL3',
    description='Building Classification Survey - GEM Platform',
    long_description=README,
    url='http://github.com/gem/oq-platform-building-class',
    author='GEM Foundation',
    author_email='devops@openquake.org',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Framework :: Django :: 1.6',
        'Intended Audience :: Scientists',
        'License :: OSI Approved :: AGPL3',  # example license
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        # Replace these appropriately if you are stuck on Python 2.
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
)
