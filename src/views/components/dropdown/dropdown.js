import Dropdown from './DropdownModule';
import { CONTAINER_SELECTOR } from './constants';

$(CONTAINER_SELECTOR).each((_index, element) => new Dropdown($(element)));
