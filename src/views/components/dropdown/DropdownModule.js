import {
  APPLY_BUTTON_SELECTOR,
  BATHROOMS_SELECTOR,
  BEDROOMS_SELECTOR,
  BEDS_SELECTOR,
  CLEAR_BUTTON_SELECTOR,
  CONTAINER_SELECTOR,
  COUNTER_SELECTOR,
  DECREMENT_SELECTOR,
  FIELD_SELECTOR,
  GUESTS_TYPE,
  INCREMENT_SELECTOR,
  LIST_SELECTOR,
  MAX_COUNT,
  MIN_COUNT,
  NEWBORNS_SELECTOR,
  OPENED_CLASS,
} from './constants';

class Dropdown {
  constructor($container) {
    this.$container = $container;
    this.$list = null;
    this.$counters = null;
    this.$increment = null;
    this.$decrement = null;
    this.$field = null;
    this.type = '';
    this.totalCount = 0;
    this.init();
  }

  init() {
    this.setType();
    this.setList();
    this.setField();
    this.setTools();
    this.setButtons();
    this.calculateTotalCount();
    this.checkTotalCount();
    this.setInitialText();
    this.checkCounters();
    this.attachDropdownListeners();
    this.attachDocumentListener();
    this.attachToolsListeners();
    this.attachButtonsListeners();
  }

  setType() {
    this.type = this.$container.data('type');
  }

  setList() {
    this.$list = this.$container.find(LIST_SELECTOR);
  }

  setField() {
    this.$field = this.$container.find(FIELD_SELECTOR);
  }

  setTools() {
    this.$counters = this.$container.find(COUNTER_SELECTOR);
    this.$increment = this.$container.find(INCREMENT_SELECTOR);
    this.$decrement = this.$container.find(DECREMENT_SELECTOR);
  }

  setButtons() {
    this.$clear = this.$container.find(CLEAR_BUTTON_SELECTOR);
    this.$apply = this.$container.find(APPLY_BUTTON_SELECTOR);
  }

  calculateTotalCount() {
    this.$counters.each(index => {
      this.totalCount += Number(this.$counters[index].innerHTML);
    });
  }

  setInitialText() {
    if (this.totalCount === MIN_COUNT) {
      this.setDefaultFieldText();
    } else {
      this.setFieldText();
    }
  }

  checkTotalCount() {
    if (this.totalCount === MIN_COUNT) {
      this.hideClearButton();
    } else {
      this.showClearButton();
    }
  }

  setDefaultFieldText() {
    if (this.type === GUESTS_TYPE) {
      this.$field.text('Сколько гостей');
    } else {
      this.$field.text('Выберите удобства');
    }
  }

  checkCounters() {
    this.$counters.each(index => {
      const counter = this.$counters[index];
      if (Number(counter.innerHTML) === MIN_COUNT) {
        this.disableElement($(counter).siblings(DECREMENT_SELECTOR));
      }

      if (Number(counter.innerHTML) === MAX_COUNT) {
        this.disableElement($(counter).siblings(INCREMENT_SELECTOR));
      }
    });
  }

  hideClearButton() {
    this.$clear.find('button').text('');
  }

  showClearButton() {
    this.$clear.find('button').text('Очистить');
  }

  attachDropdownListeners() {
    this.$container.on('click', this.openDropdownListAfterFieldClick.bind(this));
    this.$list.on('click', event => event.stopPropagation());
  }

  openDropdownListAfterFieldClick() {
    this.$container.toggleClass(OPENED_CLASS);
  }

  attachDocumentListener() {
    document.addEventListener(
      'click',
      this.closeDropdownListAfterDocumentClick.bind(this),
    );
  }

  closeDropdownListAfterDocumentClick(event) {
    if (!event.target.closest(CONTAINER_SELECTOR)) {
      this.$container.removeClass(OPENED_CLASS);
    }
  }

  attachToolsListeners() {
    this.$increment.on('click', this.incrementCounter.bind(this));
    this.$decrement.on('click', this.decrementCounter.bind(this));
  }

  incrementCounter(event) {
    event.stopPropagation();

    const $target = $(event.target);
    const $counter = $target.siblings(COUNTER_SELECTOR);
    const decrementElement = $target.siblings(DECREMENT_SELECTOR);
    let counterNumber = Number($counter.text());

    this.enableElement(decrementElement);

    $counter.text(counterNumber + 1);
    this.totalCount += 1;
    counterNumber = Number($counter.text());

    if (counterNumber === MAX_COUNT) {
      this.disableElement($target);
    }

    this.checkTotalCount();
    this.setFieldText();
  }

  decrementCounter(event) {
    event.stopPropagation();

    const $target = $(event.target);
    const $counter = $target.siblings(COUNTER_SELECTOR);
    const incrementElement = $target.siblings(INCREMENT_SELECTOR);

    let counterNumber = Number($counter.text());

    this.enableElement(incrementElement);

    $counter.text(counterNumber - 1);
    this.totalCount -= 1;
    counterNumber = Number($counter.text());

    if (counterNumber === MIN_COUNT) {
      this.disableElement($target);
    }

    this.checkTotalCount();
    if (this.totalCount === MIN_COUNT) {
      this.setDefaultFieldText();
    } else {
      this.setFieldText();
    }
  }

  setFieldText() {
    if (this.type === GUESTS_TYPE) {
      this.setGuestsFieldText();
    } else {
      this.setApartmentsFieldText();
    }
  }

  setGuestsFieldText() {
    const text = [];

    text.push(`${this.totalCount} гост${this.getGuestEnding()}`);

    const children = Number(
      this.$container.find(NEWBORNS_SELECTOR).find(COUNTER_SELECTOR).text(),
    );

    if (children) {
      text.push(`${children} младен${this.getChildrenEnding(children)}`);
    }
    let textString = text.join(', ');
    this.$field.text(textString);
  }

  getGuestEnding() {
    if (this.totalCount === 1) {
      return 'ь';
    } else if (this.totalCount > 1 && this.totalCount < 5) {
      return 'я';
    } else {
      return 'ей';
    }
  }

  getChildrenEnding(count) {
    if (count === 1) {
      return 'ец';
    } else if (count > 1 && count < 5) {
      return 'ца';
    } else {
      return 'ев';
    }
  }

  setApartmentsFieldText() {
    const bedrooms = Number(
      this.$container.find(BEDROOMS_SELECTOR).find(COUNTER_SELECTOR).text(),
    );
    const beds = Number(
      this.$container.find(BEDS_SELECTOR).find(COUNTER_SELECTOR).text(),
    );
    const bathrooms = Number(
      this.$container.find(BATHROOMS_SELECTOR).find(COUNTER_SELECTOR).text(),
    );
    let text = [];

    if (bedrooms) {
      text.push(`${bedrooms} спаль${this.getBedroomsEnd(bedrooms)}`);
    }

    if (beds) {
      text.push(`${beds} кроват${this.getBedsEnd(beds)}`);
    }

    if (bathrooms) {
      text.push(`${bathrooms} ${this.getBathroomsEnd(bathrooms)}`);
    }

    let textString = text.join(', ');



    this.$field.text(textString);
  }

  getBedroomsEnd(count) {
    if (count === 1) {
      return 'ня';
    } else if (count > 1 && count < 5) {
      return 'ни';
    } else {
      return 'ен';
    }
  }

  getBedsEnd(count) {
    if (count === 1) {
      return 'ь';
    } else if (count > 1 && count < 5) {
      return 'и';
    } else {
      return 'ей';
    }
  }

  getBathroomsEnd(count) {
    if (count === 1) {
      return 'ванная комната';
    } else if (count > 1 && count < 5) {
      return 'ванные комнаты';
    } else {
      return 'ванных комнат';
    }
  }

  disableElement($element) {
    $element.addClass('disabled');
  }

  enableElement($element) {
    $element.removeClass('disabled');
  }

  attachButtonsListeners() {
    this.$clear.on('click', this.clearDropdown.bind(this));
    this.$apply.on('click', this.applyDropdown.bind(this));
  }

  clearDropdown() {
    this.$counters.each(index => {
      this.$counters[index].innerHTML = '0';
    });
    this.totalCount = 0;
    this.checkCounters();
    this.checkTotalCount();
    this.setDefaultFieldText();
  }

  applyDropdown() {
    this.$container.toggleClass(OPENED_CLASS);
  }
}

export default Dropdown;
