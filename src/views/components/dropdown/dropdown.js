import 'item-quantity-dropdown/lib/item-quantity-dropdown.min'
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css'

$('.iqdropdown_guests').iqDropdown({
    maxItems: 20,
    setSelectionText: function (itemCount, totalItems) {
        if (!totalItems) {
            return `Сколько гостей`
        } else {
            $('input[name=guests]').val(
                itemCount['adult'] + itemCount['child'] + itemCount['newborns']
            )
        }

        console.log(this)
        let resString =
            itemCount['adult'] + itemCount['child'] + itemCount['newborns']
        if (totalItems[totalItems.length - 1] == 1 || totalItems == 1) {
            resString += ' Гость'
        } else if (totalItems > 1 && totalItems < 5) {
            resString += ' Гостя'
        } else {
            resString += ' Гостей'
        }

        if (itemCount['newborns']) {
            if (itemCount['newborns'] == 1) {
                resString += ` , ${itemCount['newborns']} Младенец`
            } else if (itemCount['newborns'] > 1 && itemCount['newborns'] < 5) {
                resString += ` , ${itemCount['newborns']} Младенца`
            } else {
                resString += ` , ${itemCount['newborns']} Младенцев`
            }
        }

        return resString
    },
})

$('.iqdropdown_apartments').iqDropdown({
    maxItems: 20,
    setSelectionText: (itemCount, totalItems) => {
        if (!totalItems) {
            return `Сколько комнат`
        }
        let res = []
        for (const key in itemCount) {
            if (itemCount[key] >= 1 && key == 'bedrooms') {
                res.push(`${itemCount[key]} Комнат`)
            } else if (itemCount[key] >= 1 && key == 'beds') {
                res.push(`${itemCount[key]} Кроватей`)
            } else if (itemCount[key] >= 1 && key == 'bathrooms') {
                res.push(`${itemCount[key]} Ванных комнат`)
            }
        }
        res = res.join(', ').slice(0, 20)
        if (res.length == 20) {
            return res + '...'
        }
        return res
    },
})

$('.iqdropdown-button, .button-increment, .button-decrement').prop(
    'type',
    'button'
)

$('.button-decrement').prop('disabled', true)

$('.button-increment').on('click', function () {
    if ($(this).prev().html() > 0) {
        $(this).prev().prev().prop('disabled', false)
    }
})
$('.button-decrement').on('click', function () {
    if ($(this).next().html() == 0) {
        $(this).prop('disabled', true)
    }
})

$('.iqdropdown-button_clear').on('click', function () {
    $('.counter').html(0)
    $('.button-decrement').prop('disabled', true)
    $('.iqdropdown-selection').html('Сколько гостей')
})
