import RangeSliderFacade from '../../../libs/range-slider/RangeSliderFacade';
import '../../../vendor/range-slider/range-slider';
import '../../../vendor/range-slider/range-slider.css';
import {
  END_PRICE_SELECTOR,
  RANGE_SLIDER_SELECTOR,
  START_PRICE_SELECTOR,
} from './constants';

class RangeSlider {
  constructor($container) {
    this.$container = $container;
    this.init();
  }

  init() {
    this.setElements();
    this.createSlider();
  }

  setElements() {
    this.$startPrice = this.$container.find(START_PRICE_SELECTOR);
    this.$endPrice = this.$container.find(END_PRICE_SELECTOR);
    this.$slider = this.$container.find(RANGE_SLIDER_SELECTOR);
  }

  createSlider() {
    this.slider = new RangeSliderFacade(this.$slider, this.$startPrice, this.$endPrice);
  }
}

export default RangeSlider;
