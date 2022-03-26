import Slider from './SliderModule';
import './images/preview-room1.png';
import './images/preview-room2.png';
import './images/preview-room3.png';
import { SLIDER_SELECTOR } from './constants';

const sliders = document.querySelectorAll(SLIDER_SELECTOR);
sliders.forEach(slider => new Slider(slider));
