import { FIRST_VALUE, SECOND_VALUE } from '../../views/components/range-slider/constants';

class RangeSliderFacade {
  constructor($slider, $startPrice, $endPrice) {
    this.$slider = $slider;
    this.$startPrice = $startPrice;
    this.$endPrice = $endPrice;
    this.init();
  }

  init() {
    this.setParams();
    this.createSlider();
  }

  setParams() {
    this.params = {
      isRange: true,
      min: 0,
      max: 15000,
      step: 100,
      onChange: this.handleChange.bind(this),
      hasScale: false,
      hasTips: false,
    };
  }

  handleChange({ value }) {
    this.$startPrice.html(`${value[FIRST_VALUE]} ₽`);
    this.$endPrice.html(`${value[SECOND_VALUE]} ₽`);
  }

  createSlider() {
    this.slider = this.$slider.slider(this.params);
  }
}

export default RangeSliderFacade;
