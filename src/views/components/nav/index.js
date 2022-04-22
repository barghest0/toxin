import NavList from './NavList';
import { SERVICES_LIST_SELECTOR, AGREEMENTS_LIST_SELECTOR } from './constants';

$(SERVICES_LIST_SELECTOR).each(
  (_index, element) =>
    new NavList($(element), [
      { name: 'Услуги' },
      { name: 'Услуги' },
      { name: 'Услуги' },
    ]),
);

$(AGREEMENTS_LIST_SELECTOR).each(
  (_index, element) =>
    new NavList($(element), [
      { name: 'Соглашения' },
      { name: 'Соглашения' },
      { name: 'Соглашения' },
    ]),
);
