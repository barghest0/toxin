import FilterButton from './FilterButtonModule';
import { FILTER_BUTTON_SELECTOR } from './constants';
import './search-room.scss';

import './images/filter-icon.svg';

import '../../components/dropdown/dropdown';
import '../../components/expand-list/expand-list';
import '../../components/preview-room/preview-room';
import '../../components/header/header';
import '../../components/datepicker/datepicker';
import '../../components/range-slider/range-slider';
import '../../components/pagination/pagination';

$(FILTER_BUTTON_SELECTOR).each((_index, element) => new FilterButton($(element)));
