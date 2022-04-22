import NavList from './NavList';
import { FOLDED_ITEM_SELECTOR } from './constants';

$(FOLDED_ITEM_SELECTOR).each((_index, element) => new NavList($(element)));
