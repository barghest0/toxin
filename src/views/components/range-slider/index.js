import RangeSlider from './RangeSlider';
import { RANGE_SLIDER_CONTAINER_SELECTOR } from './constants';

$(RANGE_SLIDER_CONTAINER_SELECTOR).each(
  (_index, element) => new RangeSlider($(element)),
);
