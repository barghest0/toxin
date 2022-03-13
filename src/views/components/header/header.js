import HeaderBurger from './HeaderBurgerModule';
import '../logo/logo';
import { BURGER_CLASS } from './constants';

new HeaderBurger($(`.${BURGER_CLASS}`));
