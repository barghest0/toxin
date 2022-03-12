import Slider from '../../../libs/range-slider/range-slider';
import '../../..//libs/range-slider/range-slider.css';
import { END_PRICE_CLASS, START_PRICE_CLASS } from './constants';

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
    this.$startPrice = $(this.container).find(`.${START_PRICE_CLASS}`);
    this.$endPrice = $(this.container).find(`.${END_PRICE_CLASS}`);
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
    this.$startPrice.html(value[0].toFixed() + ' ₽');
    this.$endPrice.html(value[1].toFixed() + ' ₽');
  }

  createSlider() {
    new Slider(this.container, this.params);
  }
}

export default RangeSlider;
