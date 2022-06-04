import PaginationFacade from 'libs/pagination/PaginationFacade';

class Pagination {
  constructor($element, count) {
    this.$element = $element;
    this.count = count;
    this.init();
  }

  init() {
    this.pagination = new PaginationFacade(this.$element, this.count);
  }
}

export default Pagination;
