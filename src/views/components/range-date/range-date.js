$('.range-date__input').on('click', e => {
  const datepicker = e.target.closest('.range-date').lastChild;
  datepicker.firstChild.classList.toggle('open');
});
