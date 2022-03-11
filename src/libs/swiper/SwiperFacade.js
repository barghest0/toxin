import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Pagination, Navigation } from 'swiper';
import {
  NEXT_BUTTON_SELECTOR,
  PAGINATION_SELECTOR,
  PREV_BUTTON_SELECTOR,
  SCROLLBAR_SELECTOR,
} from '../../js/constants/slider';

class SwiperFacade {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    this.setParams();
    this.createSlider();
  }

  setParams() {
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
  createSlider() {
    new Swiper(this.container, this.params);
  }
}

export default SwiperFacade;
