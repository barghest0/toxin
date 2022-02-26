import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import { PEOPLE_TYPE } from './constants/dropdown';

class Dropdown {
  constructor(element, size, type) {
    this.element = element;
    this.size = size;
    this.type = type;
  }
}

export default Dropdown;
