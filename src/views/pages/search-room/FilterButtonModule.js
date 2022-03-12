import { BACKGROUND_CLASS, OPENED_CLASS } from './constants';

class FilterButton {
  constructor($button) {
    this.$button = $button;
    this.init();
  }

  init() {
    this.setBackground();
    this.attachListeners();
  }

  setBackground() {
    this.$background = this.$button.siblings(`.${BACKGROUND_CLASS}`);
  }

  attachListeners() {
    this.$button.on('click', this.handleButtonClick.bind(this));
    this.$background.on('click', this.handleBackgroundClick.bind(this));
  }

  handleButtonClick() {
    this.$background.toggleClass(OPENED_CLASS);
  }

  handleBackgroundClick(event) {
    if (event.target.classList.contains(BACKGROUND_CLASS)) {
      this.$background.removeClass('active');
    }
  }
}
export default FilterButton;
