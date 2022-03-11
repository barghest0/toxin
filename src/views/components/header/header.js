import '../logo/logo';

$('.header__burger').on('click', e => {
  $('.header__burger').toggleClass('active');
  $('.header__burger-nav').toggleClass('active');
});
