#!/usr/bin/env python
import csv
import sys
with open(sys.argv[1], "rb") as fin:
    with open(sys.argv[2], "wb") as fot:
        csv_rd = csv.reader(fin)
        csv_wr = csv.writer(fot, quoting=csv.QUOTE_MINIMAL)
        for row in csv_rd:
            for idx, col in enumerate(row):
                row[idx] = row[idx].strip()

            csv_wr.writerow(row)
