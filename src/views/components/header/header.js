import HeaderBurger from './HeaderBurgerModule';
import '../logo/logo';
import '../nav/nav';
import { BURGER_SELECTOR } from './constants';
const burger = new HeaderBurger($(BURGER_SELECTOR));
