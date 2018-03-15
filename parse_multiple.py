#!user/bin/env python2

import csv


track = {}

csvfile =  open("/home/pranav/school/FinalProject/csvFiles/data.csv", "rb")
creader = csv.DictReader(csvfile)
i = 0
for row in creader:

	if row['Term'] == 'live':
		if row['Country'] in list(track.keys()):
			first_year = int(track.get(row['Country']).get('2016'))
			track.update({row['Country']:{'2016': first_year + int(row['2016']) }})
			continue

		track.update({row['Country']:{'2016': int(row['2016']) }})

print track




