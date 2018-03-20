#!user/bin/env python2
import os
import csv
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--data", help="path for csv file")

parser.add_argument("--year", help="year")

parser.add_argument("--terms", help="trade terms delimiter is comma")

parser.add_argument("--out", help="path for output data")

args = parser.parse_args()

print args.data

print args.year

print args.terms

track = {}

csvfile =  open(args.data, "rb")
creader = csv.DictReader(csvfile)
for row in creader:

	if row['Term'] in args.terms.split(','):
		if row['Country'] in list(track.keys()):
			first_year = int(track.get(row['Country']).get(args.year))
			track.update({row['Country']:{args.year: first_year + int(row[args.year]) }})

			if row['Term'] in list(track.get(row['Country']).keys()):
				existing_value = track.get(row['Country'].get(row['Term']))
				track.get(row['Country'].update({row['Term']:existing_value + int(row[args.year])}))
			else:
				track.get(row['Country'].update({row['Term']:int(row[args.year])}))

			continue

		track.update({row['Country']:{args.year: int(row[args.year]) }})
		track.get(row['Country']).update({row['Term']: int(row[args.year])})

print track

fieldnames = ["id", "population","tusks", "ivory carvings","ivory pieces", "piano keys", "jewellery - ivory", "teeth"]
newcsv = open(args.out, 'wb')

writer = csv.DictWriter(newcsv, fieldnames=fieldnames)

writer.writeheader()
for line in list(track.keys()):
	writer.writerow({"id": line, "population": track.get(line).get(args.year), "tusks": track.get(line).get("tusks")})



