import Like from './LikeModule';
import { LIKE_BUTTON_SELECTOR } from './constants';

$(LIKE_BUTTON_SELECTOR).each((_index, element) => new Like($(element)));
