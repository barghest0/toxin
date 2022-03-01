class Dropdown {
  constructor(element, size, type) {
    this.element = element;
    this.size = size;
    this.type = type;
    this.init();
  }

  init() {
    this.createDropdown();
    this.attachListeners();
  }

  createDropdown() {
    this.element.append('<div class="dropdown__list"></div>');
  }

  attachListeners() {
    this.element.on('click', e => {
      e.currentTarget.classList.toggle('open');
    });
  }
}

export default Dropdown;
