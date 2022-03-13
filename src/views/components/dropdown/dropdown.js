import { CONTAINER_CLASS } from './constants';
import Dropdown from './DropdownModule';

$(`.${CONTAINER_CLASS}`).each(function () {
  new Dropdown($(this));
});
