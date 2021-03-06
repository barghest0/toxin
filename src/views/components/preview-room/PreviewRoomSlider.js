import SwiperFacade from 'libs/swiper/SwiperFacade';

class PreviewRoomSlider {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    this.slider = new SwiperFacade(this.container);
  }
}

export default PreviewRoomSlider;
