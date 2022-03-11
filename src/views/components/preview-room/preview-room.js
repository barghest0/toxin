import './images/preview-room1.png';
import './images/preview-room2.png';
import './images/preview-room3.png';

import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Pagination, Navigation } from 'swiper';

new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  modules: [Pagination, Navigation],
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
});
