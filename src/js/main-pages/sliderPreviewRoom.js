// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import SwiperCore, { Pagination, Navigation } from 'swiper'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
