import { CONTAINER_SELECTOR } from './constants';
import Datepicker from './DatepickerModule';

$(CONTAINER_SELECTOR).each(function () {
  new Datepicker($(this));
});
