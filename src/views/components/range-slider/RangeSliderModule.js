import '../../../libs/range-slider/range-slider';
import '../../../libs/range-slider/range-slider.css';
import {
  END_PRICE_SELECTOR,
  FIRST_VALUE,
  SECOND_VALUE,
  START_PRICE_SELECTOR,
} from './constants';

class RangeSlider {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    this.setInputs();
    this.setParams();
    this.createSlider();
  }

  setInputs() {
    this.$startPrice = $(this.container).find(START_PRICE_SELECTOR);
    this.$endPrice = $(this.container).find(END_PRICE_SELECTOR);
  }

  setParams() {
    this.params = {
      hasTips: false,
      hasScale: false,
      isRange: true,
      min: 0,
      max: 15000,
      step: 100,
      onChange: this.handleChange.bind(this),
    };
  }

  handleChange({ value }) {
    this.$startPrice.html(`${value[FIRST_VALUE].toFixed()} ₽`);
    this.$endPrice.html(`${value[SECOND_VALUE].toFixed()} ₽`);
  }

  createSlider() {
    console.log($(this.container));
    this.slider = $(this.container).slider(this.params);
  }
}

export default RangeSlider;
