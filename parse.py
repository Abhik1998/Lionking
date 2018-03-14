#!user/bin/env python2

import csv


track = {}

csvfile =  open("/home/pranav/school/FinalProject/data.csv", "rb")
creader = csv.DictReader(csvfile)
i = 0
for row in creader:
	
	if row['Term'] == 'live':
		if i == 0:
			track.update({row['Country']:{'2016': int(row['2016']) }})
		first_year = int(track.get(row['Country']).get('2016')) 
		if first_year is None:
			continue
		# second_year = track.get(row['Country']).get('2014')
		# third_year = track.get(row['Country']).get('2015')
		# fourthrowyear = track.get(row['Country']).get('2016')

		track.update({row['Country']:{'2016': first_year + int(row['2016']) }})
		print int(row['2016'])
		#print (row['Term'], row['Unit'], row['Country'], row['2016'])


print track

