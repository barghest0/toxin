import Datepicker from './DatepickerModule';
import { CONTAINER_SELECTOR } from './constants';

$(CONTAINER_SELECTOR).each((_index, element) => new Datepicker($(element)));
