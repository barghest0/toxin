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
    const target = event.target;
    let likes = Number(target.innerHTML);

    if (target.classList.contains(LIKED_CLASS)) {
      likes -= 1;
    } else {
      likes += 1;
    }

    target.classList.toggle(LIKED_CLASS);

    target.innerHTML = likes;
  }
}

export default Like;
