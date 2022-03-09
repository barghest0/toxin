import {
  APARTMENTS_TYPE,
  LG_SIZE,
  MD_SIZE,
  GUESTS_TYPE,
} from '../../../js/constants/dropdown';
import Dropdown from '../../../js/Dropdown';

new Dropdown($('#dropdown-guests-1'), LG_SIZE, GUESTS_TYPE, [
  { text: 'Взрослые', name: 'adults', count: 2 },
  { text: 'Дети', name: 'children', count: 1 },
  { text: 'Младенцы', name: 'newborns', count: 0 },
]);

new Dropdown($('#dropdown-guests-2'), LG_SIZE, GUESTS_TYPE, [
  { text: 'Взрослые', name: 'adults', count: 0 },
  { text: 'Дети', name: 'children', count: 0 },
  { text: 'Младенцы', name: 'newborns', count: 0 },
]);

new Dropdown($('#dropdown-guests-3'), LG_SIZE, GUESTS_TYPE, [
  { text: 'Взрослые', name: 'adults', count: 2 },
  { text: 'Дети', name: 'children', count: 1 },
  { text: 'Младенцы', name: 'newborns', count: 0 },
]);

new Dropdown($('#dropdown-apartments-1'), MD_SIZE, APARTMENTS_TYPE, [
  { text: 'Спальни', name: 'bedrooms', count: 2 },
  { text: 'Кровати', name: 'beds', count: 2 },
  { text: 'Ванные комнаты', name: 'bathrooms', count: 0 },
]);

new Dropdown($('#dropdown-apartments-2'), MD_SIZE, APARTMENTS_TYPE, [
  { text: 'Спальни', name: 'bedrooms', count: 2 },
  { text: 'Кровати', name: 'beds', count: 2 },
  { text: 'Ванные комнаты', name: 'bathrooms', count: 0 },
]);
