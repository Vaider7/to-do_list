$('#logout').on('click', () => {
    $.ajax({
        type: 'GET',
        url: 'api/logout',
        success: (data) => {
            if (data.result === true) {
                window.location.pathname = '/sign_in'
            }
        }
    })
})

$('input').on('keyup', () => {
    if ($('#joinLogin').val() !== '') {
        $('#joinButton').addClass('on')
    } else {
        $('#joinButton').removeClass('on')
    }

    if ($('#createLogin').val() !== '')  {
        $('#createButton').addClass('on')
    } else {
        $('#createButton').removeClass('on')
    }
})

$('#createButton').on('click', () => {
    if ($('#createLogin').val() !== '') {
        let details = $('.create_team_form').serialize()
        console.log(details)
        $.ajax({
            url: '/api/team/add/data',
            type: 'POST',
            dataType: 'json',
            data: details,
            connectType: 'application/json',
            success:  (data) => {
                if (data.result === true) {
                    window.location.pathname = '/teams'
                } else {
                    $('.wrong').text(data.result)
                }
            },
            error:  (err) => {
                console.log(err)
            }
        })
    }
})

$('#joinButton').on('click', () => {
    if ($('joinLogin').val() !== '') {
        let name = $('#joinLogin')
        let details = $('.join_team_form').serialize()
        console.log(details)
        $.ajax({
            url: '/api/team/join/data',
            type: 'POST',
            dataType: 'json',
            data: details,
            connectType: 'application/json',
            success:  (data) => {
                if (data.result === true) {
                    window.location.pathname = `/teams`
                } else {
                    $('.wrong').text(data.result)
                }
            },
            error:  (err) => {
                console.log(err)
            }
        })
    }
})

$('.join_team').on('click', () => {
    let $joinForm = $('.join_team_form')
    let $createForm = $('.create_team_form')

    if ($createForm.hasClass('create_slide_down')) {
        $createForm.removeClass('create_slide_down').addClass('duration')
        setTimeout(() => {$joinForm.addClass('duration').addClass('join_slide_down')}, 300)
    } else {
        if ($joinForm.hasClass('join_slide_down')) {
            $joinForm.removeClass('join_slide_down').addClass('duration')
        } else {
            $joinForm.addClass('join_slide_down').addClass('duration')
        }
    }

})

$('.create_team').on('click', () => {
    let $joinForm = $('.join_team_form')
    let $createForm = $('.create_team_form')

    if ($joinForm.hasClass('join_slide_down')) {
        $joinForm.removeClass('join_slide_down').addClass('duration')
        setTimeout(() => {$createForm.addClass('duration').addClass('create_slide_down')}, 300)
    } else {
        if ($createForm.hasClass('create_slide_down')) {
            $createForm.addClass('duration').removeClass('create_slide_down')
        } else {
            $createForm.addClass('duration').addClass('create_slide_down')
        }
    }
})

$('html').on('click', () => {
    $('.wrong').text('')
})