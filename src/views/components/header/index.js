import HeaderBurger from './HeaderBurger';
import { BURGER_SELECTOR } from './constants';

import '../logo';
import '../nav';

$(BURGER_SELECTOR).each((_index, element) => new HeaderBurger($(element)));
