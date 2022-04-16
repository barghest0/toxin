import Slider from './SliderModule';
import { SLIDER_SELECTOR } from './constants';

import './images/preview-room1.png';
import './images/preview-room2.png';
import './images/preview-room3.png';

const sliders = document.querySelectorAll(SLIDER_SELECTOR);
sliders.forEach(slider => new Slider(slider));
