input.onButtonPressed(Button.A, function () {
    radio.sendString("aluneca stanga")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("aluneca dreapta")
})
radio.setGroup(5)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendString("stanga")
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendString("dreapta")
    } else if (input.isGesture(Gesture.LogoDown)) {
        radio.sendString("fata")
    } else if (input.isGesture(Gesture.LogoUp)) {
        radio.sendString("spate")
    }
    basic.pause(500)
})
