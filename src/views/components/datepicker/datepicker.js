import { CONTAINER_SELECTOR } from './constants';

import Datepicker from './DatepickerModule';

$(CONTAINER_SELECTOR).each((_index, element) => new Datepicker($(element)));
