import { boundMethod } from 'autobind-decorator';

import { EXPANDED_CLASS } from './constants';

class ExpandList {
  constructor($container) {
    this.$container = $container;
    this.init();
  }

  init() {
    this.attachListener();
  }

  attachListener() {
    this.$container.on('click', this.handleLabelClick);
  }

  @boundMethod
  handleLabelClick(event) {
    this.$element = $(event.currentTarget);
    this.$element.toggleClass(EXPANDED_CLASS);
  }
}

export default ExpandList;
