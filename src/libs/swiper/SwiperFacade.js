import Swiper, { Pagination, Navigation } from 'swiper';
/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import {
  NEXT_BUTTON_SELECTOR,
  PAGINATION_SELECTOR,
  PREV_BUTTON_SELECTOR,
  SCROLLBAR_SELECTOR,
} from '../../views/components/preview-room/constants';

class SwiperFacade {
  constructor(container) {
    this.container = container;
    this.#init();
  }

  #init() {
    this.#setParams();
    this.#createSlider();
  }

  #setParams() {
    this.params = {
      direction: 'horizontal',
      loop: true,
      modules: [Pagination, Navigation],

      navigation: {
        nextEl: NEXT_BUTTON_SELECTOR,
        prevEl: PREV_BUTTON_SELECTOR,
      },

      pagination: {
        el: PAGINATION_SELECTOR,
        type: 'bullets',
        clickable: true,
      },

      scrollbar: {
        el: SCROLLBAR_SELECTOR,
      },
    };
  }

  #createSlider() {
    this.swiper = new Swiper(this.container, this.params);
  }
}

export default SwiperFacade;
