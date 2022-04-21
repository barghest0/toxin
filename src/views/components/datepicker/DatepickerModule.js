import DatepickerFacade from '../../../libs/air-datepicker/DatepickerFacade';
import {
  DATEPICKER_SELECTOR,
  CONTAINER_SELECTOR,
  DATE_FROM_SELECTOR,
  DATE_TO_SELECTOR,
  FILTER_DATE_SELECTOR,
  OPENED_CLASS,
  SINGLE_DATEPICKER,
} from './constants';

class Datepicker {
  constructor($container) {
    this.$container = $container;
    this.init();
  }

  init() {
    this.setInputs();
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

    if (!this.$dateTo.length) {
      this.$dateFrom = $filterDate;
    }
  }

  setDatepicker() {
    this.datepicker =
      this.$container.find(DATEPICKER_SELECTOR)[SINGLE_DATEPICKER];
  }

  attachInputsListeners() {
    this.$dateFrom.on('click', this.openDatepickerAfterInputClick.bind(this));
    if (this.$dateTo) {
      this.$dateTo.on('click', this.openDatepickerAfterInputClick.bind(this));
    }
  }

  openDatepickerAfterInputClick() {
    this.datepicker.classList.toggle(OPENED_CLASS);
    this.$container.toggleClass(OPENED_CLASS);
  }

  attachDocumentListener() {
    document.addEventListener(
      'click',
      this.closeDatepickerAfterDocumentClick.bind(this),
    );
  }

  closeDatepickerAfterDocumentClick(e) {
    if (!e.target.closest(CONTAINER_SELECTOR)) {
      this.datepicker.classList.remove(OPENED_CLASS);
      this.$container.removeClass(OPENED_CLASS);
    }
  }
}

export default Datepicker;
