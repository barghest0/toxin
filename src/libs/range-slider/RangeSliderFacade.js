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
    this.attachListeners();
  }

  setParams() {
    this.params = {
      isRange: true,
      min: 0,
      max: 15000,
      step: 100,
      hasScale: false,
      hasTips: false,
    };
  }

  handleChange({ value }) {
    this.$startPrice.html(`${value[FIRST_VALUE].toLocaleString()} ₽`);
    this.$endPrice.html(`${value[SECOND_VALUE].toLocaleString()} ₽`);
  }

  createSlider() {
    this.slider = this.$slider.slider(this.params);
    this.slider.subscribe(this.handleChange.bind(this));
  }

  handleDocumentLoaded() {
    this.createSlider();
  }

  attachListeners() {
    window.addEventListener('load', this.handleDocumentLoaded.bind(this));
  }
}

export default RangeSliderFacade;
