import { PAGINATION_SELECTOR, QUANTITY_PAGES } from './constants';

import Pagination from './PaginationModule';

$(PAGINATION_SELECTOR).each(
  (_index, element) => new Pagination($(element), QUANTITY_PAGES),
);
