import { LIKED_CLASS } from './constants';

class Like {
  constructor($container) {
    this.$container = $container;
    this.init();
  }

  init() {
    this.attachListener();
  }

  attachListener() {
    this.$container.on('click', this.handleLikeClick);
  }

  handleLikeClick(event) {
    this.element = event.target;
    let likes = Number(this.element.innerHTML);

    if (this.element.classList.contains(LIKED_CLASS)) {
      likes -= 1;
    } else {
      likes += 1;
    }

    this.element.classList.toggle(LIKED_CLASS);

    this.element.innerHTML = likes;
  }
}

export default Like;
