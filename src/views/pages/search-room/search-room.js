import '../../components/dropdown/dropdown';
import '../../components/expand-list/expand-list';
import '../../components/preview-room/preview-room';
import '../../components/header/header';
import '../../components/datepicker/datepicker';
import '../../components/range-slider/range-slider';
import '../../components/pagination/pagination';

import './images/filter-icon.svg';

import './search-room.scss';

import FilterButton from './FilterButtonModule';

import { FILTER_BUTTON_SELECTOR } from './constants';

$(FILTER_BUTTON_SELECTOR).each((_index, element) => new FilterButton($(element)));
