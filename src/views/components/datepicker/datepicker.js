import Datepicker from '../../../js/Datepicker';

const date = new Date('2019-08-09');

$('.js-datepicker-container').each(function () {
  new Datepicker($(this));
});
