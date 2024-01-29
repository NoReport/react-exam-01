def printClock(h, m):
    if h < 10:
        h = "0"+str(h)
    if m < 10:
        m = "0"+str(m)
    if type(m) != str and type(h) != str:
        h = str(h)
        m = str(m)
    print(h,":",m)

def tick(h,m):
    if h==24 and m==60:
        printClock(0,0)
        tick(0,0)
    elif h==24:
        printClock(0,m+1)
        tick(0,m+1)
    elif m==60:
        printClock(h+1,0)
        tick(h+1,0)      
    elif m < 60: 
        printClock(h,m+1)
        tick(h,m+1)
        


#main
time = input("Enter Time (in hh:mm format): ")

h = (int(time[0])*10)+ int(time[1])
m = (int(time[-2])*10)+ int(time[-1])
tick(h,m)