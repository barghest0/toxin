import { LIKE_BUTTON_SELECTOR } from './constants';
import Like from './LikeModule';

$(LIKE_BUTTON_SELECTOR).each((_index, element) => new Like($(element)));
