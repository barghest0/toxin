import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { FILTER_TYPE, MD_SIZE } from './constants/datepicker';

class Datepicker {
  constructor(element, type, size) {
    this.element = element;
    this.type = type;
    this.params = {};
    this.size = size;
    this.init();
  }

  init() {
    this.params.buttons = [];
    this.setBaseParams();
    this.createClearButton();
    this.createApplyButton();
    this.createDatepicker();
  }

  createDatepicker() {
    this.element.each(index => {
      const datepicker = this.element.find('.datepicker')[index];
      if (this.type === FILTER_TYPE) this.attachFilterOnSelect();
      else this.attachRangeOnSelect(index);
      new AirDatepicker(datepicker, this.params);
    });
    $('.air-datepicker-button').attr('type', 'button');
  }

  setBaseParams() {
    this.params.inline = true;
    this.params.range = true;
    this.params.minDate = new Date();
    if (this.size === MD_SIZE) {
      this.params.classes = 'air-datepicker_md';
    }
    if (this.type === FILTER_TYPE) {
      this.params.dateFormat = 'd MMM';
    }
  }

  createClearButton() {
    this.params.buttons.push('clear');
  }

  createApplyButton() {
    const applyButton = {
      content: 'Применить',
      className: 'air-datepicker-button-apply',
      onClick: e => {
        e.$el.classList.toggle('open');
      },
    };
    this.params.buttons.push(applyButton);
  }

  attachFilterOnSelect() {
    this.params.onSelect = data => {
      const [from, to] = data.formattedDate;
      if (from && to) {
        $('#filter-date').val(`${from} - ${to}`);
      } else {
        $('#filter-date').val(`Выберите дату`);
      }
    };
  }

  attachRangeOnSelect(index) {
    this.params.onSelect = data => {
      const [from, to] = data.formattedDate;
      $(`#date-from-${index + 1}`).val(from);
      $(`#date-to-${index + 1}`).val(to);
    };
  }
}

export default Datepicker;
