import PaginationFacade from '../../../libs/pagination/PaginationFacade';

class Pagination {
  constructor($element) {
    this.$element = $element;

    this.init();
  }

  init() {
    this.pagination = new PaginationFacade(this.$element);
  }
}

export default Pagination;
