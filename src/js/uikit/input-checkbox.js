$('.label_checkbox-list').on('click', function () {
    $(this).toggleClass('active')
    if ($(this).hasClass('active')) {
        $(`.label_checkbox-list`)
            .filter('.active')
            .next()
            .css({ maxHeight: '100%' })
    } else {
        $(this).siblings('.input-selection').css({ maxHeight: '0' })
    }
})
