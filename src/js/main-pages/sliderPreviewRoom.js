import Swiper from 'swiper'

import 'swiper/css'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import SwiperCore, { Pagination, Navigation } from 'swiper'

SwiperCore.use([Pagination, Navigation])

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
