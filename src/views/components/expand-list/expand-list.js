import { LABEL_SELECTOR } from './constants';
import ExpandList from './ExpandListModule';

$(LABEL_SELECTOR).each((_index, element) => new ExpandList($(element)));
