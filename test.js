basic.forever(function on_forever() {
    let potentito = pins.analogReadPin(AnalogPin.P0)
    if (potentito >= 300) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    
    if (potentito < 180) {
        pins.servoWritePin(AnalogPin.P2, 50)
    } else if (potentito >= 401) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else if (181 < potentito && potentito < 1200) {
        pins.servoWritePin(AnalogPin.P2, 100)
    }
    
})
