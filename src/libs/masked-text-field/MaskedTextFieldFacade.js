import 'jquery.maskedinput/src/jquery.maskedinput';

class MaskedTextFieldFacade {
  constructor($container, mask) {
    this.$container = $container;
    this.mask = mask;
    this.#init();
  }

  #init() {
    this.#createMask();
  }

  #createMask() {
    this.$container.mask(this.mask);
  }
}

export default MaskedTextFieldFacade;
