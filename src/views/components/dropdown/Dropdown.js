import { boundMethod } from 'autobind-decorator';

import DropdownHelper from './DropdownHelper';
import {
  APPLY_BUTTON_SELECTOR,
  BATHROOMS_SELECTOR,
  BEDROOMS_SELECTOR,
  BEDS_SELECTOR,
  CLEAR_BUTTON_SELECTOR,
  COUNTER_SELECTOR,
  CONTAINER_SELECTOR,
  DECREMENT_SELECTOR,
  FIELD_SELECTOR,
  GUESTS_TYPE,
  INCREMENT_SELECTOR,
  LIST_SELECTOR,
  MAX_COUNT,
  MIN_COUNT,
  NEWBORNS_SELECTOR,
  OPENED_CLASS,
  INCREMENT_DISABLED_CLASS,
  DECREMENT_DISABLED_CLASS,
} from './constants';

class Dropdown {
  constructor($container) {
    this.$container = $container;
    this.$list = null;
    this.$counters = null;
    this.$increments = null;
    this.$decrements = null;
    this.$field = null;
    this.type = '';
    this.totalCount = 0;
    this.helper = new DropdownHelper();
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
    this.$increments = this.$container.find(INCREMENT_SELECTOR);
    this.$decrements = this.$container.find(DECREMENT_SELECTOR);
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
      this.setDefaultFieldText();
    } else {
      this.showClearButton();
      this.setFieldText();
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
    this.$counters.each((_index, counter) => {
      if (Number(counter.innerHTML) === MIN_COUNT) {
        this.$decrement = $(counter).siblings(DECREMENT_SELECTOR);
        this.disableDecrement();
      }

      if (Number(counter.innerHTML) === MAX_COUNT) {
        this.$increment = $(counter).siblings(INCREMENT_SELECTOR);
        this.disableIncrement();
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
    this.$container.on('click', this.handleDropdownClick);

    const stopPropagation = event => {
      event.stopPropagation();
    };

    this.$list.on('click', stopPropagation);
  }

  @boundMethod
  handleDropdownClick() {
    this.$container.toggleClass(OPENED_CLASS);
  }

  attachDocumentListener() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  @boundMethod
  handleDocumentClick(event) {
    const isClickedOnDropdown = event.target.closest(CONTAINER_SELECTOR);
    if (!isClickedOnDropdown) {
      this.$container.removeClass(OPENED_CLASS);
    }
  }

  attachToolsListeners() {
    this.$increments.on('click', this.handleIncrement);
    this.$decrements.on('click', this.handleDecrement);
  }

  incrementTotalCount() {
    this.totalCount += 1;
  }

  decrementTotalCount() {
    this.totalCount -= 1;
  }

  @boundMethod
  handleIncrement(event) {
    event.stopPropagation();

    this.$increment = $(event.target);
    this.$decrement = this.$increment.siblings(DECREMENT_SELECTOR);

    const $counter = this.$increment.siblings(COUNTER_SELECTOR);

    let counterNumber = Number($counter.text());

    this.enableDecrement();

    $counter.text(counterNumber + 1);
    this.incrementTotalCount();
    counterNumber = Number($counter.text());

    if (counterNumber === MAX_COUNT) {
      this.disableIncrement();
    }

    this.checkTotalCount();
    this.setFieldText();
  }

  @boundMethod
  handleDecrement(event) {
    event.stopPropagation();

    this.$decrement = $(event.target);
    this.$increment = this.$decrement.siblings(INCREMENT_SELECTOR);

    const $counter = this.$increment.siblings(COUNTER_SELECTOR);
    let counterNumber = Number($counter.text());

    this.enableIncrement();

    $counter.text(counterNumber - 1);
    this.decrementTotalCount();
    counterNumber = Number($counter.text());

    if (counterNumber === MIN_COUNT) {
      this.disableDecrement();
    }

    this.checkTotalCount();
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

    text.push(
      `${this.totalCount} ${this.helper.getGuestEnding(this.totalCount)}`,
    );

    const newborns = Number(
      this.$container.find(NEWBORNS_SELECTOR).find(COUNTER_SELECTOR).text(),
    );

    if (newborns) {
      text.push(`${newborns} ${this.helper.getNewbornsEnding(newborns)}`);
    }

    const textString = text.join(', ');
    this.$field.text(textString);
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

    const text = [];

    if (bedrooms) {
      text.push(`${bedrooms} ${this.helper.getBedroomsEnding(bedrooms)}`);
    }

    if (beds) {
      text.push(`${beds} ${this.helper.getBedsEnding(beds)}`);
    }

    if (bathrooms) {
      text.push(`${bathrooms} ${this.helper.getBathroomsEnding(bathrooms)}`);
    }

    let textString = text.join(', ');
    if (textString.length > 23) {
      textString = textString.slice(0, 23);

      textString += '...';
    }

    this.$field.text(textString);
  }

  disableDecrement() {
    this.$decrement.addClass(DECREMENT_DISABLED_CLASS);
  }

  disableIncrement() {
    this.$increment.addClass(INCREMENT_DISABLED_CLASS);
  }

  enableDecrement() {
    this.$decrement.removeClass(DECREMENT_DISABLED_CLASS);
  }

  enableIncrement() {
    this.$increment.removeClass(INCREMENT_DISABLED_CLASS);
  }

  enableAllIncrements() {
    this.$increments.each((_index, increment) => {
      this.$increment = $(increment);
      this.enableIncrement();
    });
  }

  attachButtonsListeners() {
    this.$clear.on('click', this.handleDropdownClear);
    this.$apply.on('click', this.handleDropdownApply);
  }

  @boundMethod
  handleDropdownClear() {
    this.$counters.each(index => {
      this.$counters[index].innerHTML = '0';
    });
    this.totalCount = 0;
    this.checkCounters();
    this.checkTotalCount();
    this.enableAllIncrements();
    this.setDefaultFieldText();
  }

  @boundMethod
  handleDropdownApply() {
    this.$container.toggleClass(OPENED_CLASS);
  }
}

export default Dropdown;
