let strip: light.NeoPixelStrip = null

// Twee verschillende inputs die zorgen dat er twee
// verschillende kleuren kunnen worden vertoont
input.buttonA.onEvent(ButtonEvent.Click, function () {
    strip.setAll(0xff8000)
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    strip.showAnimationFrame(light.rainbowAnimation)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    strip.setAll(0xffffff)
})

// Licht bij het aangaan van de RGB strip
strip = light.createStrip(pins.A1, 100)
strip.showAnimationFrame(light.rainbowAnimation)
