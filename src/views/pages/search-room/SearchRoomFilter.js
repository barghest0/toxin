import { boundMethod } from 'autobind-decorator';
import {
  BACKGROUND_SELECTOR,
  CLOSE_BUTTON_SELECTOR,
  OPENED_CLASS,
} from './constants';

class SearchRoomFilter {
  constructor($button) {
    this.$button = $button;
    this.init();
  }

  init() {
    this.setBackground();
    this.setCloseButton();
    this.attachListeners();
  }

  setBackground() {
    this.$background = this.$button.siblings(BACKGROUND_SELECTOR);
  }

  setCloseButton() {
    this.$closeButton = this.$background.find(CLOSE_BUTTON_SELECTOR);
  }

  attachListeners() {
    this.$button.on('click', this.handleButtonClick);
    this.$background.on('click', this.handleBackgroundClick);
    this.$closeButton.on('click', this.closeButtonClick);
  }

  @boundMethod
  handleButtonClick() {
    this.$background.toggleClass(OPENED_CLASS);
  }

  @boundMethod
  handleBackgroundClick(event) {
    if (event.target.classList.contains(OPENED_CLASS)) {
      this.$background.removeClass(OPENED_CLASS);
    }
  }

  @boundMethod
  closeButtonClick() {
    this.$background.toggleClass(OPENED_CLASS);
  }
}
export default SearchRoomFilter;
