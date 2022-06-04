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
    this.$button.on('click', this.handleFilterButtonClick);
    this.$background.on('click', this.handleBackgroundClick);
    this.$closeButton.on('click', this.handleCloseButtonClick);
  }

  @boundMethod
  handleFilterButtonClick() {
    this.$background.toggleClass(OPENED_CLASS);
  }

  @boundMethod
  handleBackgroundClick(event) {
    const isClickedOnBackground = event.target.classList.contains(OPENED_CLASS);

    if (isClickedOnBackground) {
      this.$background.removeClass(OPENED_CLASS);
    }
  }

  @boundMethod
  handleCloseButtonClick() {
    this.$background.toggleClass(OPENED_CLASS);
  }
}
export default SearchRoomFilter;
