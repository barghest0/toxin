import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'

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
