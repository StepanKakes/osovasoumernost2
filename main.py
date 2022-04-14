body=[[0,0],[1,0],[0,2],[1,2]]
obraz=[[0,0],[0,0],[0,0],[0,0]]
counter=0
stred=[2,2]
display()
console.log_value("stred", stred)
switch=True

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
    basic.clear_screen()
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
def otaceni(y):
    global body
    basic.clear_screen()
    body[0].reverse()
    body[0][y]= abs(body[0][y]-4)
    body[1].reverse()
    body[1][y]= abs(body[1][y]-4)
    body[2].reverse()
    body[2][y]= abs(body[2][y]-4)
    body[3].reverse()
    body[3][y]= abs(body[3][y]-4)
def on_forever():
    basic.pause(500)
    otaceni(1)
    display()
basic.forever(on_forever)