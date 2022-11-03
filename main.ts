basic.forever(function () {
    basic.clearScreen()
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    4
    ), pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    4
    ))
})
basic.forever(function () {
    if (led.point(0, 3)) {
        servos.P1.setAngle(30)
    } else if (led.point(1, 3)) {
        servos.P1.setAngle(60)
    } else if (led.point(2, 3)) {
        servos.P1.setAngle(90)
    } else if (led.point(3, 3)) {
        servos.P1.setAngle(120)
    } else if (led.point(4, 3)) {
        servos.P1.setAngle(180)
    }
})
basic.forever(function () {
    if (led.point(0, 4)) {
        servos.P1.setAngle(30)
    } else if (led.point(1, 4)) {
        servos.P1.setAngle(60)
    } else if (led.point(2, 4)) {
        servos.P1.setAngle(90)
    } else if (led.point(3, 4)) {
        servos.P1.setAngle(120)
    } else if (led.point(4, 4)) {
        servos.P1.setAngle(180)
    }
})
basic.forever(function () {
    if (led.point(0, 5)) {
        servos.P1.setAngle(30)
    } else if (led.point(1, 5)) {
        servos.P1.setAngle(60)
    } else if (led.point(2, 5)) {
        servos.P1.setAngle(90)
    } else if (led.point(3, 5)) {
        servos.P1.setAngle(120)
    } else if (led.point(4, 5)) {
        servos.P1.setAngle(180)
    }
})
basic.forever(function () {
    if (led.point(0, 1)) {
        servos.P1.setAngle(30)
    } else if (led.point(1, 1)) {
        servos.P1.setAngle(60)
    } else if (led.point(2, 1)) {
        servos.P1.setAngle(90)
    } else if (led.point(3, 1)) {
        servos.P1.setAngle(120)
    } else if (led.point(4, 1)) {
        servos.P1.setAngle(180)
    }
})
basic.forever(function () {
    if (led.point(0, 2)) {
        servos.P1.setAngle(30)
    } else if (led.point(1, 2)) {
        servos.P1.setAngle(60)
    } else if (led.point(2, 2)) {
        servos.P1.setAngle(90)
    } else if (led.point(3, 2)) {
        servos.P1.setAngle(120)
    } else if (led.point(4, 2)) {
        servos.P1.setAngle(180)
    }
})
basic.forever(function () {
    if (led.point(0, 0)) {
        servos.P1.setAngle(30)
    } else if (led.point(1, 0)) {
        servos.P1.setAngle(60)
    } else if (led.point(2, 0)) {
        servos.P1.setAngle(90)
    } else if (led.point(3, 0)) {
        servos.P1.setAngle(120)
    } else if (led.point(4, 0)) {
        servos.P1.setAngle(180)
    }
})
