import "item-quantity-dropdown/lib/item-quantity-dropdown.min";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min.css";
import { APARTMENTS_TYPE, LG_SiZE, MD_SIZE, PEOPLE_TYPE } from "../../../js/constants/dropdown";
import Dropdown from "../../../js/Dropdown";

new Dropdown($(".iqdropdown_guests"), LG_SiZE, PEOPLE_TYPE);

new Dropdown($(".iqdropdown_apartments"), MD_SIZE, APARTMENTS_TYPE);
