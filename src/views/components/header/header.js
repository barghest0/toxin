import HeaderBurger from './HeaderBurgerModule';
import { BURGER_SELECTOR } from './constants';

import '../logo/logo';
import '../nav/nav';

$(BURGER_SELECTOR).each((_index, element) => new HeaderBurger($(element)));
