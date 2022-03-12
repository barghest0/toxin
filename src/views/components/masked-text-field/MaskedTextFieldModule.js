import 'jquery.maskedinput/src/jquery.maskedinput';
import { MASK } from './constants';

class MaskedTextField {
  constructor($container) {
    this.$container = $container;
    this.init();
  }

  init() {
    this.setMask();
    this.createMask();
  }

  setMask() {
    this.mask = MASK;
  }

  createMask() {
    this.$container.mask(this.mask);
  }
}

export default MaskedTextField;
