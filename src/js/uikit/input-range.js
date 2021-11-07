import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'

// let initialSlider = $('.input-range__initial-value')
// let finalSlider = $('.input-range__final-value')

// let sliderTrack = $('.input-range__multi-range-track')
// let maxValue = $('.input-range__initial-value').attr('max')

// let gap = 1000

// initialSlider.on('input', () => {
//     if (parseInt(finalSlider.val()) - parseInt(initialSlider.val()) <= gap) {
//         initialSlider.val(parseInt(finalSlider.val()) - gap)
//     }
//     initialValue.text(initialSlider.val() + '₽')
//     fillColor()
// })

// finalSlider.on('input', () => {
//     if (parseInt(finalSlider.val()) - parseInt(initialSlider.val()) <= gap) {
//         finalSlider.val(parseInt(initialSlider.val()) + gap)
//     }

//     finalValue.text(finalSlider.val() + '₽')
//     fillColor()
// })

// function fillColor() {
//     p1 = (initialSlider.val() / maxValue) * 100
//     p2 = (finalSlider.val() / maxValue) * 100

//     sliderTrack.css({
//         background: `linear-gradient(to right, #fff ${p1}%,  #6FCF97 ${p1}%, #6FCF97, ${p2}%, #fff ${p2}%)`,
//     })
// }

let initialValue = $('#initialValue')
let finalValue = $('#finalValue')

$('#price-slider').ionRangeSlider({
    type: 'double',
    skin: 'round',
    from: 5000,
    to: 10000,
    min: 1000,
    max: 15000,
    step: 100,
    grid: false,
    hide_from_to: true,
    extra_classes: 'da',
    onChange: data => {
        initialValue.text(data.from + '₽')
        finalValue.text(data.to + '₽')
    },
})
