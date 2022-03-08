import { LG_SIZE } from './constants/dropdown';

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
    // this.setCurrentElement()
    this.createTotalText();
    this.createList();
    this.createButtons();
    this.setTotalText(123, 0);
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
                item.count <= 0 ? 'dropdown__list-decrement_disabled' : ''
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
    if (this.size === LG_SIZE) {
      this.element.find('.dropdown__list').append(
        `<div class="dropdown__buttons">
          <button class="dropdown__clear-button button button_no-bordered">${
            this.totalCount > 0 ? 'Очистить' : ''
          } </button>
          <button class="dropdown__submit-button button button_no-bordered">Применить</button>
        </div>`,
      );
    }
  }

  createTotalText() {
    this.element.append('<div class="dropdown__total-text"></div>');
  }

  setTotalText(text, index) {
    $(this.element[index]).find('.dropdown__total-text').text(text);
  }

  incrementCounter(e) {
    const clickedElement = $(e.target.closest('.dropdown__list-item')).index();
    const currentData = this.data[clickedElement];
    if (currentData.count === 0) {
      this.element.find('.dropdown__clear-button').html('Очистить');
    }

    $(e.target)
      .siblings('.dropdown__list-decrement')
      .removeClass('dropdown__list-decrement_disabled');
    currentData.count += 1;
    this.totalCount += 1;

    if (currentData.count === 10) {
      $(e.target).addClass('dropdown__list-increment_disabled');
    }

    $(e.target).siblings('.dropdown__list-counter').text(currentData.count);
    this.updateTotalText();
  }

  decrementCounter(e) {
    const clickedElement = $(e.target.closest('.dropdown__list-item')).index();
    const currentData = this.data[clickedElement];

    $(e.target)
      .siblings('.dropdown__list-increment')
      .removeClass('dropdown__list-increment_disabled');

    currentData.count -= 1;
    this.totalCount -= 1;
    if (this.totalCount === 0) {
      this.element.find('.dropdown__clear-button').html('');
    }

    if (currentData.count === 0) {
      currentData.count = 0;
      $(e.target).addClass('dropdown__list-decrement_disabled');
    }
    $(e.target).siblings('.dropdown__list-counter').text(currentData.count);
    this.updateTotalText();
  }

  updateTotalText() {
    this.setTotalText(123, 0);
  }

  clearTotalText(e) {
    const currentIndex = $(e.target.closest('.dropdown__field')).index();
    this.data.forEach(item => {
      item.count = 0;
    });
    this.totalCount = 0;
    const items = $(this.element).find('.dropdown__list-item');
    items.each(function () {
      $(this).find('.dropdown__list-counter').html('0');
      $(this)
        .find('.dropdown__list-decrement')
        .addClass('dropdown__list-decrement_disabled');
    });
    $('.dropdown__clear-button').html('');
  }

  attachListeners() {
    this.element.on('click', e => {
      e.currentTarget.classList.toggle('open');
    });

    this.element
      .find('.dropdown__list-increment')
      .on('click', this.incrementCounter.bind(this));
    this.element
      .find('.dropdown__list-decrement')
      .on('click', this.decrementCounter.bind(this));

    this.element.find('.dropdown__list').on('click', e => {
      e.stopPropagation();
    });

    this.element
      .find('.dropdown__clear-button')
      .on('click', this.clearTotalText.bind(this));

    this.element.find('.dropdown__submit-button').on('click', e => {
      e.target.closest('.dropdown__field').classList.toggle('open');
    });
  }
}

export default Dropdown;
