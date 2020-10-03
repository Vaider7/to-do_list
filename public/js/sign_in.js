$('.sign_in_form').on('keyup',  () => {
    let inputs = $('.sign_in_input')
    if (inputs[0].value !== '' && inputs[1].value !=='') {
        $('#submit').addClass('submit_on').removeClass('submit')
        window.check_inputs_sign_in = true
    }
    else {
        $('#submit').addClass('submit').removeClass('submit_on')
        window.check_inputs_sign_in = false
    }
}).on('submit', (e) =>{
    e.preventDefault()
    if (window.check_inputs_sign_in) {
        let details = $('.sign_in_form').serialize()
        $.ajax({
            url: '/api/auth/data',
            type: 'POST',
            dataType: 'json',
            data: details,
            connectType: 'application/json',
            success:  (data) => {
                if (data.result === true) {
                    window.location.pathname = '/'
                } else {
                    $('.wrong_input_sign_in_error').text(data.result).addClass('wrong_input_sign_in_show')
                }
            },
            error:  (err) => {
                console.log(err)
            }
        })
    }
})



$('.sign_up_form').on('keyup', () => {
    let count = 0
    $('.sign_up_input').each( function () {
        if ($(this).val() !== '') {
           count += 1
        }
    })
    if (count === 6) {
        $('#sign_up_submit').addClass('sign_up_submit_on').removeClass('sign_up_submit')
        window.check_inputs_sign_up = true
    } else {
        $('#sign_up_submit').addClass('sign_up_submit ').removeClass('sign_up_submit_on')
        window.check_inputs_sign_up = false
    }
}).on('submit', (e) => {
    e.preventDefault()
    if (window.check_inputs_sign_up) {
        let details = $('.sign_up_form').serialize()
        $.ajax({
            url: '/api/reg/data',
            type: 'POST',
            dataType: 'json',
            data: details,
            connectType: 'application/json',
            success: (data) => {
                console.log(data.field)
                if (data.result === true) {
                    $('#main_container').removeClass('main_container_slided').addClass('main_container_onscreen')
                    $('#main_container_sign_up').addClass('main_container_sign_up_slided').removeClass('main_container_sign_up_onscreen')
                    $('.message').animate({
                        top: '0'
                    }, 250, () => {
                        setTimeout(() => {
                            $('.message').animate({
                                top: '-22px'
                            }, 250)
                        }, 3000)
                    })
                } else {
                    $('.wrong_input_sign_up_error').text(data.result)
                    $('#' + `${data.field}`).addClass('wrong_input_sign_up')
                }
            },
            error: (err) => {
                console.log(err)
            }
        })
    }
})

$('.sign_up_button').on('click', () => {
    $('#main_container').removeClass('main_container_onscreen').addClass('main_container_slided')
    $('#main_container_sign_up').addClass('main_container_sign_up_onscreen').removeClass('main_container_sign_up_slided')
})

$('#pointer-left').on('click', () =>{
    $('#main_container').removeClass('main_container_slided').addClass('main_container_onscreen')
    $('#main_container_sign_up').addClass('main_container_sign_up_slided').removeClass('main_container_sign_up_onscreen')
})

$('html').on('click', () => {
    $('.wrong_input_sign_in_error').removeClass('wrong_input_sign_in_show').addClass(('wrong_input_sign_up_hide')).text('')
    $('.wrong_input_sign_up_error').text('')
    $('.sign_up_input').removeClass('wrong_input_sign_up')
})