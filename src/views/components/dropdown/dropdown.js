import { CONTAINER_SELECTOR } from './constants';

import Dropdown from './DropdownModule';

$(CONTAINER_SELECTOR).each((_index, element) => new Dropdown($(element)));
