import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import {
  APPLY_BUTTON_CLASS,
  OPENED_DATEPICKER_CLASS,
  MIDDLE_DATEPICKER_CLASS,
} from '../../js/constants/datepicker';

class DatepickerFacade {
  constructor(datepicker, $dateFrom, $dateTo = null) {
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
  }

  setParams() {
    this.params = {
      inline: true,
      range: true,
      minDate: new Date(),
      buttons: this.buttons,
    };
    this.setRangeParams();
    if (!this.$dateTo.length) {
      this.setFilterParams();
    }
  }

  setRangeParams() {
    this.params.onSelect = data => {
      const [from, to] = data.formattedDate;
      this.$dateFrom.val(from);
      this.$dateTo.val(to);
    };
  }

  setFilterParams() {
    this.params.dateFormat = 'd MMM';
    this.params.onSelect = data => {
      const [from, to] = data.formattedDate;
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
        e.$el.classList.toggle(OPENED_DATEPICKER_CLASS);
      },
    };
    this.buttons = ['clear', applyButton];
  }

  createDatepicker() {
    new AirDatepicker(this.datepicker, this.params);
  }
}

export default DatepickerFacade;
