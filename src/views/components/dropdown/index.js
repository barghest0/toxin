import Dropdown from './Dropdown';
import { CONTAINER_SELECTOR } from './constants';

$(CONTAINER_SELECTOR).each((_index, element) => new Dropdown($(element)));
