class Dropdown {
  constructor(element, size, type, data) {
    this.element = element;
    this.size = size;
    this.type = type;
    this.data = data;
    this.totalCount = 0;
    this.totalText = '';
    this.init();
  }

  init() {
    this.createTotalCount();
    this.createList();
    this.createButtons();
    this.setTotalCount();
    this.attachListeners();
  }

  createList() {
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
      this.totalCount += item.count;
    }
    this.totalText = `${this.totalCount > 0 ? this.totalCount : 'Сколько гостей'}`;
  }

  createButtons() {
    this.element.find('.dropdown__list').append(
      `<div class="dropdown__buttons">
        <button class="dropdown__clear-button button button_no-bordered">${
          this.totalCount > 0 ? 'Очистить' : ''
        } </button>
        <button class="dropdown__submit-button button button_no-bordered">Применить</button>
      </div>`,
    );
  }

  createTotalCount() {
    this.element.append('<div class="dropdown__total-count"></div>');
  }

  setTotalCount() {
    this.element.find('.dropdown__total-count').text(this.totalCount);
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
