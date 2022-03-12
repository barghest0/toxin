import { EXPANDED_CLASS } from './constants/expand-list';

class ExpandList {
  constructor($container) {
    this.$container = $container;
    this.init();
  }

  init() {
    this.attachListener();
  }

  attachListener() {
    this.$container.on('click', this.clickLabelCallback);
  }

  clickLabelCallback(event) {
    $(event.currentTarget).next().toggleClass(EXPANDED_CLASS);
  }
}

export default ExpandList;
