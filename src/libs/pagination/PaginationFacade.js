import 'paginationjs';

class PaginationFacade {
  constructor($element, count) {
    this.$element = $element;
    this.count = count;
    this.init();
  }

  init() {
    this.setParams();
    this.createPagination();
  }

  setParams() {
    this.params = {
      dataSource: done => {
        const pages = new Array(this.count).fill('').map((_, i) => i + 1);
        done(pages);
      },
      pageSize: 12,
      pageRange: 1,
      autoHidePrevious: true,
      autoHideNext: true,
      showNavigator: true,
      prevText: '<span class="pagination__prev js-pagination__prev"></span>',
      nextText: '<span class="pagination__next js-pagination__next"></span>',
      formatNavigator: `<span class="pagination__from js-pagination__from"><%= currentPage %></span> &ndash;
    <span class="pagination__to js-pagination__to">12</span> из 100+ вариантов аренды</span>`,
    };
  }

  createPagination() {
    this.$element.pagination(this.params);
  }
}

export default PaginationFacade;
