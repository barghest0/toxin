import Slider from '../../../libs/range-slider/range-slider';
import '../../../libs/range-slider/range-slider.css';

const handleChange = data => {
	console.log(data.value);
	$('.range-slider__start-price').html(data.value[0].toFixed() + ' ₽');
	$('.range-slider__end-price').html(data.value[1].toFixed() + ' ₽');
};
const slider = new Slider('.slider', {
	hasTips: false,
	hasScale: false,
	isRange: true,
	min: 0,
	max: 15000,
	step: 100,
	onChange: handleChange,
});
