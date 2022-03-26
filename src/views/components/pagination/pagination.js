import { PAGINATION_SELECTOR } from './constants';
import Pagination from './PaginationModule';

$(PAGINATION_SELECTOR).each((_index, element) => new Pagination($(element)));
