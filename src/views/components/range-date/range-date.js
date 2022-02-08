$('.text-field__input_range-date').on('click', e => {
	const datepicker = e.target.closest('.range-date').lastChild;
	datepicker.firstChild.classList.toggle('active');
});
