import {
  APARTMENTS_TYPE,
  LG_SiZE,
  MD_SIZE,
  PEOPLE_TYPE,
} from '../../../js/constants/dropdown';
import Dropdown from '../../../js/Dropdown';

new Dropdown($('.dropdown__field'), 'lg', 'people', [
  { text: 'Взрослые', name: 'adults', count: 2 },
  { text: 'Дети', name: 'children', count: 1 },
  { text: 'Младенцы', name: 'newborns', count: 0 },
]);
