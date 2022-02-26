import 'paginationjs';
const QUANTITY = 180;

class Pagination {
  constructor($element, page) {
    this.$element = $element;
    this.page = page;

    this.createPagination();
  }

  createPagination() {
    this.$element.pagination({
      dataSource: done => {
        const arrayOfItems = new Array(QUANTITY).fill('').map((_, i) => i + 1);
        done(arrayOfItems);
      },
      pageSize: 12,
      pageRange: 1,
      autoHidePrevious: true,
      autoHideNext: true,
      showNavigator: true,
      prevText: '<span class="pagination__prev"></span>',
      nextText: '<span class="pagination__next"></span>',
      formatNavigator: `<span class="js-pagination__from"><%= currentPage %></span> &ndash;
    <span class="js-pagination__to">12</span> из 100+ вариантов аренды</span>`,
    });
  }
}

export default Pagination;
