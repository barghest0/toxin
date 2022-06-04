import 'components/logo';
import 'components/nav';

import HeaderBurger from './HeaderBurger';
import { BURGER_SELECTOR } from './constants';

$(BURGER_SELECTOR).each((_index, element) => new HeaderBurger($(element)));
