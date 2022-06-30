import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { boundMethod } from 'autobind-decorator';

import {
  APPLY_BUTTON_CLASS,
  OPENED_CLASS,
  BUTTON_SELECTOR,
  YEAR,
  MONTH,
  DAY,
  MIDDLE_DATEPICKER_CLASS,
  FOCUS_CELL_CLASS,
  RANGE_FROM_CELL_CLASS,
  RANGE_TO_CELL_CLASS,
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
      onSelect: this.handleCellSelect,
      classes: this.setClasses(),
    };

    if (this.datepicker.dataset.dateFrom && this.datepicker.dataset.dateTo) {
      this.setSelectedDates();
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

  isFilterDate() {
    return !this.$dateTo.length && this.$dateFrom.length;
  }

  handleFilterDatepickerSelect({ formattedDate }) {
    const [from, to] = formattedDate;
    if (from && to) {
      this.$dateFrom.val(`${from} - ${to}`);
    } else {
      this.$dateFrom.val(`Выберите дату`);
    }
  }

  handleRangeDatepickerSelect({ formattedDate }) {
    const [from, to] = formattedDate;
    this.$dateFrom.val(from);
    this.$dateTo.val(to);
  }

  @boundMethod
  handleCellSelect({ datepicker, formattedDate }) {
    if (this.isFilterDate()) {
      this.handleFilterDatepickerSelect({ formattedDate });
    } else {
      this.handleRangeDatepickerSelect({ formattedDate });
    }

    const [fromDate, toDate] = datepicker.selectedDates;
    const isFromDateSelected = datepicker.selectedDates.length === 1;
    const isToDateSelected = datepicker.selectedDates.length === 2;

    if (isFromDateSelected) {
      this.fixSingleDateAppearance(fromDate);
    }
    if (isToDateSelected) {
      this.fixSingleDateAppearance(toDate);
    }
  }

  fixSingleDateAppearance(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const selector = `.air-datepicker-cell[data-year=${year}][data-month=${month}][data-date=${day}]`;
    const $selectedCell = $(selector, this.datepicker.$datepicker);

    if ($selectedCell.hasClass(FOCUS_CELL_CLASS)) {
      $selectedCell.addClass(RANGE_FROM_CELL_CLASS);
      $selectedCell.addClass(RANGE_TO_CELL_CLASS);
    }
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
