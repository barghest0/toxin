import AirDatepicker from 'air-datepicker';

import 'air-datepicker/air-datepicker.css';

import {
  APPLY_BUTTON_CLASS,
  OPENED_CLASS,
  BUTTON_SELECTOR,
} from '../../views/components/datepicker/constants';

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
      dateFormat: 'MM.dd.yyyy',
    };
    if (this.datepicker.dataset.dateFrom && this.datepicker.dataset.dateTo) {
      this.setSelectedDates();
    }
    this.setRangeParams();
    if (!this.$dateTo.length) {
      this.setFilterParams();
    }
  }

  setSelectedDates() {
    this.params.selectedDates = [
      this.datepicker.dataset.dateFrom,
      this.datepicker.dataset.dateTo,
    ];
  }

  setRangeParams() {
    this.params.onSelect = ({ formattedDate }) => {
      const [from, to] = formattedDate;
      this.$dateFrom.val(from);
      this.$dateTo.val(to);
    };
  }

  setFilterParams() {
    this.params.dateFormat = 'd MMM';
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
