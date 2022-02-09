$('.text-field__input_filter-date').on('click', e => {
	const datepicker = e.target.closest('.filter-date').lastChild;
	datepicker.firstChild.classList.toggle('active');
});
