$('.filter-date__input').on('click', e => {
  const datepicker = e.target.closest('.filter-date').lastChild;
  datepicker.firstChild.classList.toggle('open');
});
