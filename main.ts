let body = [[0, 0], [1, 0], [0, 2], [1, 2]]
let obraz = [[0, 0], [0, 0], [0, 0], [0, 0]]
let counter = 0
let stred = [2, 2]
display()
console.logValue("stred", stred)
let switch_ = true
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
    
    basic.clearScreen()
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
function otaceni(y: number) {
    
    basic.clearScreen()
    body[0].reverse()
    body[0][y] = Math.abs(body[0][y] - 4)
    body[1].reverse()
    body[1][y] = Math.abs(body[1][y] - 4)
    body[2].reverse()
    body[2][y] = Math.abs(body[2][y] - 4)
    body[3].reverse()
    body[3][y] = Math.abs(body[3][y] - 4)
}

basic.forever(function on_forever() {
    basic.pause(500)
    otaceni(1)
    display()
})
