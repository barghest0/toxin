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
    this.$container.on('click', this.handleLinkClick.bind(this));
    document.addEventListener(
      'click',
      this.closeDropdownListAfterDocumentClick.bind(this),
    );
  }

  handleLinkClick(event) {
    event.stopPropagation();
    this.$container.toggleClass(OPENED_CLASS);
  }

  closeDropdownListAfterDocumentClick(event) {
    if (!event.target.closest(LIST_SELECTOR)) {
      this.$container.removeClass(OPENED_CLASS);
    }
  }
}
export default NavList;
