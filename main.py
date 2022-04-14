body=[[0,0],[1,0],[0,2],[1,2]]
obraz=[[0,0],[0,0],[0,0],[0,0]]
counter=0
stred=[2,2]
display()
console.log_value("stred", stred)


def vypocet():
    global obraz, body
    counter=0
    for x in body:
        obraz[counter][0]=body[counter][0]
        obraz[counter][1]=body[counter][1]
        obraz[counter][0]=abs(obraz[counter][0]-4)
        obraz[counter][1]=abs(obraz[counter][1]-4)
        #console.log_value("counter", counter)
        counter+=1
    
def display():
    global obraz,body
    led.plot_brightness(stred[0], stred[1],100)
    vypocet()
    typ=body
    for k in range(2):
        counter=0
        for i in body:
            led.plot(typ[counter][0], typ[counter][1])
            counter+=1
        typ=obraz      
    
console.log_value("body", body)
    
def on_forever():
    global body
    counter=0
    counter_h=0
    
    console.log_value("counter", counter_h)
    console.log_value("counter2", counter)
    basic.clear_screen()
    display()
    basic.pause(500)
    if body[0][0]==0:
        for h in body:
            body[counter_h][0]+=1
            counter_h+=1
    
    

forever(on_forever)