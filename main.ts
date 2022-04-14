let body = [[0, 0], [1, 0], [0, 2], [1, 2]]
let obraz = [[0, 0], [0, 0], [0, 0], [0, 0]]
let counter = 0
let stred = [2, 2]
display()
console.logValue("stred", stred)
function vypocet() {
    
    let counter = 0
    for (let x of body) {
        obraz[counter][0] = body[counter][0]
        obraz[counter][1] = body[counter][1]
        obraz[counter][0] = Math.abs(obraz[counter][0] - 4)
        obraz[counter][1] = Math.abs(obraz[counter][1] - 4)
        // console.log_value("counter", counter)
        counter += 1
    }
}

function display() {
    let counter: number;
    
    led.plotBrightness(stred[0], stred[1], 100)
    vypocet()
    let typ = body
    for (let k = 0; k < 2; k++) {
        counter = 0
        for (let i of body) {
            led.plot(typ[counter][0], typ[counter][1])
            counter += 1
        }
        typ = obraz
    }
}

console.logValue("body", body)
forever(function on_forever() {
    
    let counter = 0
    let counter_h = 0
    console.logValue("counter", counter_h)
    console.logValue("counter2", counter)
    basic.clearScreen()
    display()
    basic.pause(500)
    if (body[0][0] == 0) {
        for (let h of body) {
            body[counter_h][0] += 1
            counter_h += 1
        }
    }
    
})
