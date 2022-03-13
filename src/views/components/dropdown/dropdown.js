import { CONTAINER_SELECTOR } from './constants';
import Dropdown from './DropdownModule';

$(CONTAINER_SELECTOR).each(function () {
  new Dropdown($(this));
});
