import ExpandList from './ExpandListModule';
import { LABEL_SELECTOR } from './constants';

$(LABEL_SELECTOR).each((_index, element) => new ExpandList($(element)));
