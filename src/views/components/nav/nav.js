import { SERVICES_LIST_SELECTOR, AGREEMENTS_LIST_SELECTOR } from './constants';
import NavList from './NavListModule';

const servicesList = new NavList($(SERVICES_LIST_SELECTOR), [
  { name: 'Услуги' },
  { name: 'Услуги' },
  { name: 'Услуги' },
]);
const agreementsList = new NavList($(AGREEMENTS_LIST_SELECTOR), [
  { name: 'Соглашения' },
  { name: 'Соглашения' },
  { name: 'Соглашения' },
]);
