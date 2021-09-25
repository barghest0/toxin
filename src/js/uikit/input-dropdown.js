import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min'
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css'

$('.iqdropdown').iqDropdown({
    maxItems: 20,
    setSelectionText: (itemCount, totalItems) => {
        if (totalItems == 0) {
            return `Сколько гостей`
        } else if (totalItems[totalItems.length - 1] == 1 || totalItems == 1) {
            return `${
                itemCount['guests-adult'] +
                itemCount['guests-child'] +
                itemCount['guests-newborns']
            } Гость`
        } else if (totalItems > 1 && totalItems < 5) {
            return `${
                itemCount['guests-adult'] +
                itemCount['guests-child'] +
                itemCount['guests-newborns']
            } Гостя`
        }
        return `${
            itemCount['guests-adult'] +
            itemCount['guests-child'] +
            itemCount['guests-newborns']
        } Гостей`
    },
})
