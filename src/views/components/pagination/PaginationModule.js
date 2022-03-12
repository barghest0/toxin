import PaginationFacade from '../../../libs/pagination/PaginationFacade';

class Pagination {
  constructor($element) {
    this.$element = $element;

    this.init();
  }

  init() {
    new PaginationFacade(this.$element);
  }
}

export default Pagination;
