import 'air-datepicker/dist/css/datepicker.min.css'
import 'air-datepicker/dist/js/datepicker.min'

$('#datepicker-from').datepicker({
    onSelect: function (fd) {
        const [first, second] = fd.split('-')
        $('#datepicker-from').val(first)
        $('#datepicker-to').val(second)
    },
    multipleDatesSeparator: '-',
})

$('#range-datepicker').datepicker({
    dateFormat: 'dd M',
    multipleDatesSeparator: ' - ',
})
