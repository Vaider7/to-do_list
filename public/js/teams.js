$('input').on('keyup', () => {
    if ($('#joinLogin').val() !== '') {
        $('#joinButton').addClass('on')
    }
    else {
        $('#joinButton').removeClass('on')
    }

    if ($('#createLogin').val() !== '' && $('#createPassword')() !== '')  {

    }
}).on('click', () => {
    if ($('#joinLogin').val() !== '') {
        $.ajax({

        })
    }
})

$('.join_team').on('click', () => {
    let $form = $('.join_team_form')
    if ($form.hasClass('join_slide_down')) {
        $form.removeClass('join_slide_down').addClass('duration')
    } else {
        $form.addClass('join_slide_down').addClass('duration')
    }

})

$('.create_team').on('click', () => {
    let $form = $('.create_team_form')
    if ($form.hasClass('create_slide_down')) {
        $form.removeClass('create_slide_down').addClass('duration')
    } else {
        $form.addClass('create_slide_down').addClass('duration')
    }
})
