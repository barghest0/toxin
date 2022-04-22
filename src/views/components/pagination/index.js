import Pagination from './Pagination';
import { PAGINATION_SELECTOR, QUANTITY_PAGES } from './constants';

$(PAGINATION_SELECTOR).each(
  (_index, element) => new Pagination($(element), QUANTITY_PAGES),
);
