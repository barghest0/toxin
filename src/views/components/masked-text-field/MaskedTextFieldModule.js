import { MASK } from './constants';

import MaskedTextFieldFacade from '../../../libs/masked-text-field/MaskedTextFieldFacade';

class MaskedTextField {
  constructor($container, mask) {
    this.$container = $container;
    this.mask = mask;
    this.init();
  }

  init() {
    this.createMaskedField();
  }

  createMaskedField() {
    this.maskedField = new MaskedTextFieldFacade(this.$container, MASK);
  }
}

export default MaskedTextField;
