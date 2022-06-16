import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

import {
  APPLY_BUTTON_CLASS,
  OPENED_CLASS,
  BUTTON_SELECTOR,
  YEAR,
  MONTH,
  DAY,
  MIDDLE_DATEPICKER_CLASS,
} from './constants';

class DatepickerFacade {
  constructor($container, datepicker, $dateFrom, $dateTo = null) {
    this.$container = $container;
    this.datepicker = datepicker;
    this.$dateFrom = $dateFrom;
    this.$dateTo = $dateTo;
    this.params = {};
    this.buttons = [];
    this.init();
  }

  init() {
    this.createButtons();
    this.setParams();
    this.createDatepicker();
    this.setButtonsTypeToButton();
  }

  setParams() {
    this.params = {
      inline: true,
      range: true,
      minDate: new Date(),
      buttons: this.buttons,
      isMobile: true,
      dateFormat: this.isFilterDate() ? 'd MMM' : 'dd.MM.yyyy',
      autoClose: false,
      moveToOtherMonthsOnSelect: false,
      classes: this.setClasses(),
    };
    if (this.datepicker.dataset.dateFrom && this.datepicker.dataset.dateTo) {
      this.setSelectedDates();
    }

    this.setRangeParams();
    if (this.isFilterDate()) {
      this.setFilterParams();
    }
  }

  setClasses() {
    if (this.isFilterDate()) {
      return MIDDLE_DATEPICKER_CLASS;
    }

    return '';
  }

  isInlineDatepicker() {
    return !this.$dateTo.length && !this.$dateFrom.length;
  }

  setSelectedDates() {
    const dateFromArray = this.datepicker.dataset.dateFrom.split('.');
    const dateToArray = this.datepicker.dataset.dateTo.split('.');

    const dateFrom = new Date(
      dateFromArray[YEAR],
      dateFromArray[MONTH] - 1,
      dateFromArray[DAY],
    );
    const dateTo = new Date(
      dateToArray[YEAR],
      dateToArray[MONTH] - 1,
      dateToArray[DAY],
    );
    this.params.selectedDates = [dateFrom, dateTo];
  }

  setRangeParams() {
    this.params.onSelect = ({ formattedDate }) => {
      const [from, to] = formattedDate;
      this.$dateFrom.val(from);
      this.$dateTo.val(to);
    };
  }

  isFilterDate() {
    return !this.$dateTo.length && this.$dateFrom.length;
  }

  setFilterParams() {
    this.params.onSelect = ({ formattedDate }) => {
      const [from, to] = formattedDate;
      if (from && to) {
        this.$dateFrom.val(`${from} - ${to}`);
      } else {
        this.$dateFrom.val(`Выберите дату`);
      }
    };
  }

  createButtons() {
    const applyButton = {
      content: 'Применить',
      className: APPLY_BUTTON_CLASS,
      onClick: e => {
        e.$el.classList.toggle(OPENED_CLASS);
        this.$container.toggleClass(OPENED_CLASS);
      },
    };
    this.buttons = ['clear', applyButton];
  }

  createDatepicker() {
    this.airDatepicker = new AirDatepicker(this.datepicker, this.params);
  }

  setButtonsTypeToButton() {
    $(this.datepicker)
      .find(BUTTON_SELECTOR)
      .each((_index, button) => {
        $(button).attr('type', 'button');
      });
  }
}

export default DatepickerFacade;
