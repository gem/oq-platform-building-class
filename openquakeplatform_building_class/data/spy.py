#!/usr/bin/env python
import json

def walker(j, sequence):
    print "walker BEGIN: \"%s\"" % sequence[0]['group']
    
    if j['type'] == 'group' and j['name'] == sequence[0]['group']:
        for i, jj in enumerate(j['el']):
            print "  %d) %s" % (i, jj['name'])

        for i, jj in enumerate(j['el']):
            if jj['name'] == sequence[0]['name']:
                print "  FOUND: %s" % (sequence[0]['name'],)
                new_seq = sequence[1:]
                if len(new_seq) == 0:
                    return True
                return walker(jj['sub'], new_seq)
        else:
            print "NAME NOT FOUND %s" % sequence[0]['name']
            return False
    else:
        print "GROUP NOT FOUND %s" % sequence[0]['group']
        return False
        
    
    #     print "%d) type: %s name: %s" % (i, j['type'], j['name'])
    #     print j.keys()
    #     if j['type'] == sequence[0]['name']:
    #         print "Found (%s, %s)" % (sequence[0]['type'], sequence[0]['name'])
    #         walker(j['el'], sequence[1:])
    # else:
    #     print "NOT FOUND (%s, %s)" % (sequence[0]['type'], sequence[0]['name'])

sequence = [{'group': 'Material', 'name': 'Masonry'},
            {'group': 'Type',     'name': 'Unreinforced'},
            {'group': 'Height',   'name': 'Low rise (<3 floors)'},
            {'group': 'Irregularities',   'name': 'Regular'},
            {'group': 'Ductility',   'name': 'Non ductile (PGA<0.1g)'},
            {'group': 'Type of block',   'name': 'Stone'},
            {'group': 'Type of mortar',   'name': 'Lime mortar'},
            # {'group': 'Type of Reinforcing', 'name': 'xx'},
            {'group': 'Percentage of walls', 'name': 'Low percentage of walls'},
            {'group': 'Roof/Floor type', 'name': 'Heavyweight floor (e.g. concrete slab)'},
            
            # {'group': 'Type of reinforcement',   'name': 'NOT AVAILABLE'},
            
]

with open('tmp/masonry.json', 'r+') as f:
    j = json.load(f)

ret = walker({'type': 'group', 'name': 'Material', 'el': [j]}, sequence)

print "SUCCESS" if ret else "FAILED"

