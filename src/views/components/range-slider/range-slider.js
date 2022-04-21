import RangeSlider from './RangeSliderModule';
import { RANGE_SLIDER_CONTAINER_SELECTOR } from './constants';

$(RANGE_SLIDER_CONTAINER_SELECTOR).each(
  (_index, element) => new RangeSlider($(element)),
);
