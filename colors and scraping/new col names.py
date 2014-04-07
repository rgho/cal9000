
colorDict = {}
for line in open('half-culled.txt'):
	line = line.split('|')
	line[1] =  line[1].replace("\n", "")
	line[1] =  line[1].replace("#", "")
	colorDict[line[0]] = line[1]
print colorDict
