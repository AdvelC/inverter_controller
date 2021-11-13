function PressInverterButton () {
    pins.digitalWritePin(DigitalPin.P3, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P3, 0)
}
basic.showString("WAIT")
basic.pause(5000)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0) {
            PressInverterButton()
        }
    } else {
        if (pins.digitalReadPin(DigitalPin.P2) == 0) {
            PressInverterButton()
        }
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showString("ON")
    } else {
        if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            basic.showString("OFF")
        } else {
            basic.showString("??")
        }
    }
    basic.pause(1000)
})
