import os
path = os.chdir("D:\\code\\thefirst\\tmp")
i = 0
for file in os.listdir(path):
    newfile = "{}.png".format(i)
    os.rename(file, newfile)
    i += 1
