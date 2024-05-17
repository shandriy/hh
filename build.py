import os
import glob

directory = r"./append/**.js"
directoryList = glob.glob(directory, recursive=True)

mainFile = open("main.js", "w")
mainFile.write("")
mainFile.close()
mainFile = open("main.js", "a")

for fileName in directoryList:
  filePath = fileName
  print(filePath)

  if os.path.isfile(filePath):
    file = open(filePath, "r")
    fileContents = file.read()
    file.close()

    mainFile.write("\n" + fileContents)

mainFile.close()