import Slider from '../../../libs/range-slider/range-slider';
import '../../../libs/range-slider/range-slider.css';

const slider = new Slider('.slider', {
	hasTips: false,
	hasScale: false,
	onChange: data => console.log(data.value),
});
