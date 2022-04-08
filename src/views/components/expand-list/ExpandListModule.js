import { EXPANDED_CLASS } from './constants';

class ExpandList {
  constructor($container) {
    this.$container = $container;
    this.#init();
  }

  #init() {
    this.#attachListener();
  }

  #attachListener() {
    this.$container.on('click', this.#clickLabelCallback);
  }

  #clickLabelCallback(event) {
    this.$element = $(event.currentTarget);
    this.$element.toggleClass(EXPANDED_CLASS);
    this.$element.next().toggleClass(EXPANDED_CLASS);
  }
}

export default ExpandList;
