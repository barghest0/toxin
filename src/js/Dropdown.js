class Dropdown {
  constructor(element, size, type, data) {
    this.element = element;
    this.size = size;
    this.type = type;
    this.data = data;
    this.init();
  }

  init() {
    this.createDropdown();
    this.attachListeners();
  }

  createDropdown() {
    this.element.append('<div class="dropdown__list"></div>');
    for (const item of this.data) {
      this.element.find('.dropdown__list').append(
        `<div class="dropdown__list-item" data-name="${item.name}" >
            ${item.text}
            <div class="dropdown__list-tools">
              <div class="dropdown__list-decrement ${
                item.count <= 0 ? 'dropdown__list-decrement_disabled' : null
              }">-</div>
              <div class="dropdown__list-counter">${item.count}</div>
              <div class="dropdown__list-increment">+</div>
            </div>
          </div>`,
      );
    }
  }

  attachListeners() {
    this.element.on('click', e => {
      e.currentTarget.classList.toggle('open');
    });

    this.element.find('.dropdown__list').on('click', e => {
      e.stopPropagation();
    });
  }
}

export default Dropdown;
