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

# print args.data

# print args.year

# print args.terms

track = {}

csvfile =  open(args.data, "rb")
creader = csv.DictReader(csvfile)
for row in creader:
    if len(row['Unit']) != 0:
        continue
    term = row['Term']

    if term in args.terms.split(','):
        print term
        if row['Country'] in list(track.keys()):
            first_year = float(track.get(row['Country']).get(args.year))
            #track.update({row['Country']:{args.year: first_year + float(row[args.year]) }})
            track.get(row['Country']).update({args.year: first_year + float(row[args.year])})

            if term in list(track.get(row['Country']).keys()):
                existing_value = track.get(row['Country']).get(term)
                #track.get(row['Country']).update({term:existing_value + float(row[args.year])})
                track.get(row['Country'])[term] = existing_value + float(row[args.year])
            else:
                #track.get(row['Country']).update({term:float(row[args.year])})
                track.get(row['Country'])[term] = float(row[args.year])

            continue

        track.update({row['Country']:{args.year: float(row[args.year]) }})
        #track.get(row['Country']).update({term: float(row[args.year])})
        track.get(row['Country'])[term] = float(row[args.year])

# print track
# print args.terms
#fieldnames = ["id", "population" "bodies", "bone pieces", "carvings", "claws", "live", "medicine", "rug", "skin pieces", "skins", "specimens", "teeth", "trophies"]
fieldnames = ["id", "population","live"]
# tiger:fieldnames = ["id", "population", "bodies", "bone pieces", "carvings", "claws", "live", "medicine", "specimens"]
#rhino: fieldnames = ["id", "population", "specimens", "medicine", "live", "trophies", "bodies", "carvings", "horns", "horn carvings"]
#elephant: fieldnames = ["id", "population","tusks", "ivory carvings","ivory pieces", "piano keys", "jewellery - ivory", "teeth"]
#for x in args.terms.split(','):
#   fieldnames.append(x)

newcsv = open(args.out, 'wb')

writer = csv.DictWriter(newcsv, fieldnames=fieldnames)

writer.writeheader()
for line in list(track.keys()):
    #writer.writerow({"id": line, "population": track.get(line).get(args.year)})
    writer.writerow({"id": line, "population": track.get(line).get(args.year), "live": track.get(line).get("live")}) #"bodies": track.get(line).get("bodies"), "bone pieces": track.get(line).get("bone pieces"), "carvings": track.get(line).get("carvings"), "claws": track.get(line).get("claws"), "live": track.get(line).get("live"), "medicine": track.get(line).get("medicine"), "specimens": track.get(line).get("specimens")})


#print args.terms.split(',')
