import { boundMethod } from 'autobind-decorator';

import { LIST_SELECTOR, OPENED_CLASS } from './constants';

class NavList {
  constructor($container, items) {
    this.$container = $container;
    this.items = items;
    this.init();
  }

  init() {
    this.attachListeners();
  }

  attachListeners() {
    this.$container.on('click', this.handleLinkClick);
    document.addEventListener('click', this.handleDocumentClick);
  }

  @boundMethod
  handleLinkClick(event) {
    event.stopPropagation();
    this.$container.toggleClass(OPENED_CLASS);
  }

  @boundMethod
  handleDocumentClick(event) {
    const isClickedOnNavigation = event.target.closest(LIST_SELECTOR);
    if (!isClickedOnNavigation) {
      this.$container.removeClass(OPENED_CLASS);
    }
  }
}
export default NavList;
