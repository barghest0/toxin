import HeaderBurger from './HeaderBurgerModule';
import '../logo/logo';
import '../nav/nav';
import { BURGER_SELECTOR } from './constants';

$(BURGER_SELECTOR).each((_index, element) => new HeaderBurger($(element)));
