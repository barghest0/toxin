import {
  LIST_SELECTOR,
  OPENED_CLASS,
  LIST_CLASS,
  LIST_ITEM_CLASS,
} from './constants';

class NavListModule {
  constructor($container, items) {
    this.$container = $container;
    this.items = items;
    this.init();
  }

  init() {
    this.createList();
    this.createLinks();
    this.attachListeners();
  }

  createList() {
    this.$container.append(`<div class=${LIST_CLASS}><div>`);
    this.list = this.$container.find(LIST_SELECTOR);
  }

  createLinks() {
    this.items.forEach(item => {
      this.list.append(
        `<a href="/mock-addres/change-me" class=${LIST_ITEM_CLASS}>${item.name}</a>`,
      );
    });
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
export default NavListModule;
