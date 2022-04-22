import Datepicker from './Datepicker';
import { CONTAINER_SELECTOR } from './constants';

$(CONTAINER_SELECTOR).each((_index, element) => new Datepicker($(element)));
