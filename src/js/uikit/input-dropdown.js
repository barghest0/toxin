import 'item-quantity-dropdown/lib/item-quantity-dropdown.min'
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css'

$('.guests').iqDropdown({
    maxItems: 20,
    setSelectionText: (itemCount, totalItems) => {
        if (!totalItems) {
            $('.button-decrement').prop('disabled', true)
            return `Сколько гостей`
        } else {
            $('.guests').find('.button-decrement').prop('disabled', false)
        }
        if (totalItems[totalItems.length - 1] == 1 || totalItems == 1) {
            return `${
                itemCount['adult'] + itemCount['child'] + itemCount['newborns']
            } Гость`
        } else if (totalItems > 1 && totalItems < 5) {
            return `${
                itemCount['adult'] + itemCount['child'] + itemCount['newborns']
            } Гостя`
        }
        return `${
            itemCount['adult'] + itemCount['child'] + itemCount['newborns']
        } Гостей`
    },
})

$('.apartments').iqDropdown({
    maxItems: 20,
    setSelectionText: (itemCount, totalItems) => {
        if (!totalItems) {
            $('.button-decrement').prop('disabled', true)
            return `Сколько комнат`
        } else {
            $('.apartments').find('.button-decrement').prop('disabled', false)
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
