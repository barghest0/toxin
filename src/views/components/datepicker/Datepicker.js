import { boundMethod } from 'autobind-decorator';

import DatepickerFacade from 'libs/air-datepicker/DatepickerFacade';

import {
  DATEPICKER_SELECTOR,
  CONTAINER_SELECTOR,
  DATE_FROM_SELECTOR,
  DATE_TO_SELECTOR,
  FILTER_DATE_SELECTOR,
  SINGLE_DATEPICKER,
  DATEPICKER_OPENED_CLASS,
  RANGE_DATE_OPENED_CLASS,
  FILTER_DATE_OPENED_CLASS,
} from './constants';

class Datepicker {
  constructor($container) {
    this.$container = $container;
    this.init();
  }

  init() {
    this.setInputs();
    this.setParents();
    this.setDatepicker();
    this.attachInputsListeners();
    this.attachDocumentListener();
    this.datepickerFacade = new DatepickerFacade(
      this.$container,
      this.datepicker,
      this.$dateFrom,
      this.$dateTo,
    );
  }

  setInputs() {
    this.$dateFrom = this.$container.find(DATE_FROM_SELECTOR);
    this.$dateTo = this.$container.find(DATE_TO_SELECTOR);
    const $filterDate = this.$container.find(FILTER_DATE_SELECTOR);

    if (!this.isRageDate()) {
      this.$dateFrom = $filterDate;
    }
  }

  setParents() {
    this.$dateFromParent = this.$dateFrom.parent();
    this.$dateToParent = this.$dateTo.parent();
  }

  setDatepicker() {
    this.datepicker =
      this.$container.find(DATEPICKER_SELECTOR)[SINGLE_DATEPICKER];
  }

  attachInputsListeners() {
    this.$dateFrom.on('click', this.handleInputClick);
    if (this.isRageDate()) {
      this.$dateTo.on('click', this.handleInputClick);
    }
  }

  isRageDate() {
    return this.$dateTo.length;
  }

  @boundMethod
  handleInputClick() {
    this.datepicker.classList.toggle(DATEPICKER_OPENED_CLASS);
    if (this.isRageDate()) {
      this.$dateFromParent.toggleClass(RANGE_DATE_OPENED_CLASS);
      this.$dateToParent.toggleClass(RANGE_DATE_OPENED_CLASS);
    } else {
      this.$dateFromParent.toggleClass(FILTER_DATE_OPENED_CLASS);
    }
  }

  attachDocumentListener() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  @boundMethod
  handleDocumentClick(event) {
    const isClickedOnDatepicker = event.target.closest(CONTAINER_SELECTOR);
    if (!isClickedOnDatepicker) {
      this.datepicker.classList.remove(DATEPICKER_OPENED_CLASS);
      if (this.isRageDate()) {
        this.$dateFromParent.removeClass(RANGE_DATE_OPENED_CLASS);
        this.$dateToParent.removeClass(RANGE_DATE_OPENED_CLASS);
      } else {
        this.$dateFromParent.removeClass(FILTER_DATE_OPENED_CLASS);
      }
    }
  }
}

export default Datepicker;
