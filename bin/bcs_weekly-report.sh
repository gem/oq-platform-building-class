#!/bin/bash
#
#
#
# THIS POSTGRES PROCEDURE IS REQUIRED TO REVERSE 'path' FIELDS
#
# CREATE FUNCTION array_reverse(anyarray) RETURNS anyarray AS $$
# SELECT ARRAY(
#     SELECT $1[i]
#     FROM generate_subscripts($1,1) AS s(i)
#     ORDER BY i DESC
# );
# $$ LANGUAGE 'sql' STRICT IMMUTABLE;
# 
#
# TODO
#   constraint on mod date (and buffering of header to skip empty updates
#
DT=$(date '+%Y%m%d_%H%M')

# LOG_FILE=/tmp/bcs_sql.log
LOG_FILE=/dev/null

date > 
owner_id_list=$(echo "SELECT owner_id FROM openquakeplatform_building_class_classificationhead GROUP BY owner_id;" | tee -a $LOG_FILE | psql -A -t oqplatform)

IFS='
'
(
cat <<EOF
<html>
  <head>
    <style>
table {
border-collapse: collapse;
margin: 16px;
}

div.bcs_group {
border: 1px solid gray;
margin-left: 16px;
margin-bottom: 8px;
background-color: #f8f8f8;
}

table th {
padding: 4px;
background-color: #fafafa;
}

table td {
padding: 8px;
background-color: #fdfdfd;
}

table.bcs_items {
float: right;
margin-top: 0;
}

p.divfoot {
clear: both;
margin: 0;
padding: 0;
}
    </style>
    
    </head>
<body>
EOF
echo "owner_id_list [$owner_id_list]" >> $LOG_FILE
for owner_id in $owner_id_list; do
    if [ "$owner_id" = "15" -o "$owner_id" = "1820" ]; then
        continue
    fi
    echo -e "\\pset footer off\nSELECT username,first_name,last_name,email FROM auth_user WHERE id=$owner_id;" | tee -a $LOG_FILE | psql -q --html oqplatform 2>/dev/null
    header_id_list=$(echo "SELECT id, freq_type FROM openquakeplatform_building_class_classificationhead WHERE  owner_id = $owner_id;" | tee -a $LOG_FILE | psql -A -t oqplatform)
    echo "header_id_list [$header_id_list]" >> $LOG_FILE
    for header_row in $header_id_list; do
        header_id=$(echo "$header_row" | cut -d '|' -f 1)
        freq_type=$(echo "$header_row" | cut -d '|' -f 2)

        echo "<div class='bcs_group'>"
        echo -e "\\pset footer off
                 SELECT c.name_0 as country,\
CASE h.occupancy WHEN 1 THEN 'residential'\
                 WHEN 2 THEN 'commercial'\
                 WHEN 4 THEN 'industrial'\
                 WHEN 8 THEN 'educational'\
                 WHEN 16 THEN 'healthcare'\
                 WHEN 32 THEN 'governmental'\
                 ELSE 'UNKNOWN !!' END as occupancy, \
                     h.notes, h.vers\
                     FROM openquakeplatform_building_class_classificationhead as h,\
                          gadm_countries_simplified_1000m as c\
                     WHERE h.country = c.iso AND h.id = $header_id AND h.owner_id = $owner_id;" | \
                tee -a $LOG_FILE | psql -q --html oqplatform

        if [ "$freq_type" -eq 0 ]; then
            echo -e "\\pset footer off
                     SELECT \
array_to_string(array_reverse(string_to_array(r.path, '|')), '|') as path, \
CASE r.urban WHEN 0 THEN 'inexistent'\
             WHEN 1 THEN 'rare'\
             WHEN 2 THEN 'moderately freq.'\
             WHEN 3 THEN 'frequent'\
             WHEN 4 THEN 'very frequent'\
             ELSE 'UNKNOWN !!' END as urban, \
CASE r.rural WHEN 0 THEN 'inexistent'\
             WHEN 1 THEN 'rare'\
             WHEN 2 THEN 'moderately freq.'\
             WHEN 3 THEN 'frequent'\
             WHEN 4 THEN 'very frequent'\
             ELSE 'UNKNOWN !!' END as rural, \
r.vers\
                         FROM openquakeplatform_building_class_classificationhead as h,\
                              openquakeplatform_building_class_classificationrow as r \
                         WHERE h.id = r.head_id AND h.id = $header_id AND h.owner_id = $owner_id;" | \
                tee -a $LOG_FILE | psql -q --html  '--table-attr=class="bcs_items"' oqplatform
        elif [ "$freq_type" -eq 1 ]; then
            echo -e "\\pset footer off
                     SELECT \
array_to_string(array_reverse(string_to_array(r.path, '|')), '|') as path, \
r.urban_quan, r.rural_quan, r.vers\
                         FROM openquakeplatform_building_class_classificationhead as h,\
                              openquakeplatform_building_class_classificationrow as r \
                         WHERE h.id = r.head_id AND h.id = $header_id AND h.owner_id = $owner_id;" | \
                tee -a $LOG_FILE | psql -q --html '--table-attr=class="bcs_items"' oqplatform
        else
            echo "ERROR: unknown frequency type"
            exit 1
        fi
        echo "<p class='divfoot'></p>"
        echo "</div>"
    done
    echo "<hr/>"
done

cat <<EOF
</body>
</html>
EOF
) > bcs_weekly-report_${DT}.html

echo "POST HTML"
set -x

echo "\\copy (\
SELECT u.username, u.first_name, u.last_name, u.email, c.name_0 as country, \
\
CASE h.occupancy WHEN 1 THEN 'residential'\
                 WHEN 2 THEN 'commercial'\
                 WHEN 4 THEN 'industrial'\
                 WHEN 8 THEN 'educational'\
                 WHEN 16 THEN 'healthcare'\
                 WHEN 32 THEN 'governmental'\
                 ELSE 'UNKNOWN !!' END as occupancy, \
                 h.notes, h.vers, \
\
array_to_string(array_reverse(string_to_array(r.path, '|')), '|') as path, \
CASE r.urban WHEN 0 THEN 'inexistent'\
             WHEN 1 THEN 'rare'\
             WHEN 2 THEN 'moderately freq.'\
             WHEN 3 THEN 'frequent'\
             WHEN 4 THEN 'very frequent'\
             ELSE 'UNKNOWN !!' END as urban, \
CASE r.rural WHEN 0 THEN 'inexistent'\
             WHEN 1 THEN 'rare'\
             WHEN 2 THEN 'moderately freq.'\
             WHEN 3 THEN 'frequent'\
             WHEN 4 THEN 'very frequent'\
             ELSE 'UNKNOWN !!' END as rural, \
r.urban_quan, r.rural_quan, r.vers \
\
FROM auth_user AS u, \
     openquakeplatform_building_class_classificationhead AS h, \
     openquakeplatform_building_class_classificationrow AS r, \
     gadm_countries_simplified_1000m AS c \
WHERE h.country = c.iso AND h.id = r.head_id AND h.owner_id = u.id ORDER BY u.username, h.id) \
TO bcs_dump_${DT}.csv DELIMITER ',' CSV HEADER;" | tee -a $LOG_FILE | psql oqplatform
