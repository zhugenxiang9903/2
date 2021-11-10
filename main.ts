let 温度 = 0
basic.clearScreen()
basic.forever(function () {
    温度 = 31
    if (温度 > 31) {
        basic.showLeds(`
            # . . . #
            # . . . #
            . # # # .
            . # # # .
            # . . . #
            `)
        music.playTone(700, music.beat(BeatFraction.Whole))
        while (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . # # # .
                # . # . #
                . # # . .
                `)
            music.playTone(500, music.beat(BeatFraction.Half))
        }
    } else {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
