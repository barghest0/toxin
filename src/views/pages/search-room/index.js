import 'components/dropdown';
import 'components/expand-list';
import 'components/preview-room';
import 'components/header';
import 'components/datepicker';
import 'components/range-slider';
import 'components/pagination';

import './search-room.scss';
import './images/filter-icon.svg';
import SearchRoomFilter from './SearchRoomFilter';
import { FILTER_BUTTON_SELECTOR } from './constants';

$(FILTER_BUTTON_SELECTOR).each(
  (_index, element) => new SearchRoomFilter($(element)),
);
