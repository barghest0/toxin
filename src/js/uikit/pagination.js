class Pagination {
    constructor(root, options) {
        this.__root = root
        this.__options = options
        this.__current = this.__options.curr
        this.__items = []

        this.init()
    }

    init() {
        this.__root.classList.add('pagination')
        this.__render()
    }

    destroy() {
        this.__root.classList.remove('pagination')
        this.__removeItems()
    }

    __removeItems() {
        this.__items.forEach(item => item.remove())
        this.__items = []
    }

    __render() {
        this.__removeItems()

        const isCollapsed = this.__options.slots < 5
        const slots = Math.min(this.__options.slots, this.__options.total)
        const ellipsisPos = []
        let i, showFirst, showLast

        let start = this.__current - Math.round(this.__options.slots / 2) + 1

        const overflow = start + slots - 1 - this.__options.total
        if (overflow > 0) start -= overflow
        if (start <= 0) start -= start - 1

        const end = start + slots - 1

        const hasEllipsisLeft = start > 1
        const hasEllipsisRright = end < this.__options.total
        if (hasEllipsisLeft) ellipsisPos.push(isCollapsed ? start : start + 1)
        if (hasEllipsisRright) ellipsisPos.push(isCollapsed ? end : end - 1)

        for (i = start; i <= end; i++) {
            showFirst = !isCollapsed && i == start && hasEllipsisLeft
            showLast = !isCollapsed && i == end && hasEllipsisRright

            if (showFirst) {
                this.__renderElement(1)
            } else if (ellipsisPos.includes(i)) {
                this.__renderElement('...')
            } else if (showLast) {
                this.__renderElement(this.__options.total)
                if (hasEllipsisRright) {
                    this.__renderElement()
                }
            } else {
                this.__renderElement(i)
            }
        }
    }

    __renderElement(value) {
        const isPage = typeof value === 'number'
        const isNext = !value
        const el = document.createElement(isPage ? 'button' : 'span')
        el.classList.add('pagination__item')
        el.textContent = value

        if (isPage) {
            el.classList.add('pagination__item_button')
            el.addEventListener('click', () => {
                this.__current = value
                this.__render()
                $('.pagination__item_next').append(
                    `<img src="../../assets/img/PaginationArrow.svg">`
                )
            })

            if (value == this.__current) {
                el.classList.add('active')
            }
        }
        if (isNext) {
            el.classList.add('pagination__item_next')

            el.addEventListener('click', () => {
                this.__current = this.__current + 1
                this.__render()
                $('.pagination__item_next').append(
                    `<img src="../../assets/img/PaginationArrow.svg">`
                )
            })
        }

        return this.__items.push(this.__root.appendChild(el))
    }
}

;(() => {
    new Pagination(document.querySelector('#pagination'), {
        curr: 1,
        slots: 7,
        total: 15,
    })
})()

$('.pagination__item_next').append(
    `<img src="../../assets/img/PaginationArrow.svg">`
)
