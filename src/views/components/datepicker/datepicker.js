import { CONTAINER_CLASS } from './constants';
import Datepicker from './DatepickerModule';

$(`.${CONTAINER_CLASS}`).each(function () {
  new Datepicker($(this));
});
