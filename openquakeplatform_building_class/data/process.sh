#!/bin/bash
set -x
IFS='
'
rm -rf tmp
rm -rf out
mkdir -p tmp
mkdir -p out
#
#  FIXME
#
for f in $(ls src/*.csv); do
    bname="$(basename "$f" ".csv")"
    outname="$(echo "$bname" | sed 's/typologiesList - //g')"
    # ./csvgroup/survey_csvgroup.py "$f" "tmp/${bname}_sort.csv"
    # ./csv2json/survey_csv2json.py "tmp/${bname}_sort.csv" > out/${outname}.json
    ./csv2json/survey_csv2json_shot.py "$f" "tmp/${outname}.json"
    cat "tmp/${outname}.json" | sed  'h;x;s/^\( *\).*/\1/;s/    / /g;x;s/^ *\(.*\)/\1/g;H;x;s/\n//' \
                                      > "tmp/${outname}2.json" 
    ./compact.sh "tmp/${outname}2.json" > "tmp/${outname}3.json"

    cat <<EOF >"out/${outname}.js"
/*
   Copyright (c) 2017, GEM Foundation.

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU Affero General Public License as
      published by the Free Software Foundation, either version 3 of the
      License, or (at your option) any later version.

      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU Affero General Public License for more details.

      You should have received a copy of the GNU Affero General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

EOF
    
    echo "gem_bcs_tree_descr['${outname}'] = " | tr -d '\n' >> "out/${outname}.js"
    cat "tmp/${outname}3.json" >> "out/${outname}.js"
    echo ";"  >> "out/${outname}.js"

done
