#!/usr/bin/env python
import csv
import sys
import json
from pprint import pprint

_base = { 'type': 'choice', 'name': 'BASE_NAME' }

#
#   'type': 'choice':
#       'name': '__BASE__', 'group': 'BASE_GROUP', 'sub_arr': []
#   ... became afrer mangling ...
#       'name': '__BASE__', 'sub': (a type group object with el == 'sub_arr' element)
#
#   'type': 'group':
#       'name': item['group'], 'el': item['sub_arr']}
#
#

def nav_mang(item):
    for sub_node in item['sub_arr']:
        nav_mang(sub_node)

    if len(item['sub_arr']) > 0:
        item['sub'] = {'type': 'group', 'name': item['group'], 'el': item['sub_arr']}
 
    del(item['sub_arr'])
    del(item['group'])

def d_print(*args, **kvargs):
    pass
    
#
#  MAIN
#
csvfile = open(sys.argv[1], 'rb')
jsonout = open(sys.argv[2], 'wb')
csv_reader = csv.reader(csvfile)
is_first = True
for row_l, row in enumerate(csv_reader):
    d_print("Row: %d" % row_l)
    for i in range(0, len(row)):
        row[i] = row[i].strip()

    if is_first:
        titles = list(row)
        is_first = False
        continue

    choice_cur = _base
    for col in range(0, len(row)):
        d_print("Col: %d" % col)
        if row[col] == '-':
            continue

        if not choice_cur.has_key('sub'):
            group_cur = {'type': 'group', 'name': titles[col], 'el': []}
            choice_cur['sub'] = group_cur
        elif choice_cur['sub']['name'] == titles[col]:
            group_cur = choice_cur['sub']
        else:
            print "duplicated SUB name: found %s , checking %s at row %d" % (
                choice_cur['sub']['name'], titles[col], row_l)
            sys.exit(11)

        for choice in group_cur['el']:
            if choice['name'] == row[col]:
                d_print("CHO: [%s] FOUND (%d)" % (row[col], row_l))
                choice_cur = choice
                break
        else:
            choice_cur = {'type': 'choice', 'name': row[col]}
            group_cur['el'].append(choice_cur)
            
        

# nav_mang(_base)


json.dump(_base['sub']['el'][0], jsonout, indent=4, sort_keys=True)

# pprint(_base['sub'])

