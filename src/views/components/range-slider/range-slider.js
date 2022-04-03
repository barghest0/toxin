import { RANGE_SLIDER_CONTAINER_SELECTOR } from './constants';
import RangeSlider from './RangeSliderModule';

$(RANGE_SLIDER_CONTAINER_SELECTOR).each((_index, element) => new RangeSlider($(element)));
