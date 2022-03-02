import {
  APARTMENTS_TYPE,
  LG_SIZE,
  MD_SIZE,
  GUESTS_TYPE,
} from '../../../js/constants/dropdown';
import Dropdown from '../../../js/Dropdown';

new Dropdown($('.dropdown__field_guests'), LG_SIZE, GUESTS_TYPE, [
  { text: 'Взрослые', name: 'adults', count: 2 },
  { text: 'Дети', name: 'children', count: 1 },
  { text: 'Младенцы', name: 'newborns', count: 0 },
]);

new Dropdown($('.dropdown__field_apartments'), MD_SIZE, APARTMENTS_TYPE, [
  { text: 'Спальни', name: 'bedrooms', count: 2 },
  { text: 'Кровати', name: 'beds', count: 2 },
  { text: 'Ванные комнаты', name: 'bathrooms', count: 0 },
]);
