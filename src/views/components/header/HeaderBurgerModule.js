import { BURGER_CLASS, BURGER_NAV_CLASS, OPEN_BURGER_CLASS } from './constants';

class HeaderBurger {
  constructor($container) {
    this.$container = $container;
    this.init();
  }

  init() {
    this.setBurgerNav();
    this.attachListeners();
  }

  setBurgerNav() {
    this.$burgerNav = this.$container.find(`.${BURGER_NAV_CLASS}`);
  }

  attachListeners() {
    this.$container.on('click', this.handleBurgerClick);
    document.addEventListener('click', this.closeBurgerAfterDocumentClick.bind(this));
  }

  handleBurgerClick(event) {
    $(event.currentTarget).toggleClass(OPEN_BURGER_CLASS);
    $(`.${BURGER_NAV_CLASS}`).toggleClass(OPEN_BURGER_CLASS);
  }

  closeBurgerAfterDocumentClick(event) {
    if (!event.target.closest(`.${BURGER_CLASS}`)) {
      this.$container.removeClass(OPEN_BURGER_CLASS);
    }
  }
}

export default HeaderBurger;
