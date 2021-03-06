$('#logout').on('click', () => {
    $.ajax({
        type: 'GET',
        url: '../api/logout',
        success: (data) => {
            if (data.result === true) {
                window.location.pathname = '/sign_in'
            }
        }
    })
})

function addTask () {
    $('.header_container').after('' +
        '<div class="task new">\n' +
        '    <form class="new_task">\n' +
        '        <div class="first_line">\n' +
        '            <div class="task_header"><input type="text" name="task_header" class="task_header_input" placeholder="Заголовок"></div>\n' +
        '            <div class="buttons">\n' +
        '                <svg version="1.1" id="cross" class="ico" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '                     viewBox="0 0 496.096 496.096" style="enable-background:new 0 0 496.096 496.096;" xml:space="preserve">\n' +
        '    <g>\n' +
        '        <g>\n' +
        '            <path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686\n' +
        '                L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342\n' +
        '                c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31\n' +
        '                l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>\n' +
        '        </g>\n' +
        '    </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '                    <g>\n' +
        '                        </g>\n' +
        '    </svg>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="second_line">\n' +
        '            <div class="date">\n' +
        '                <div class="timing">Сроки:&nbsp;</div>\n' +
        '                <div class="date_start"><input type="text" name="date_start" class="date_input date_start_input">\n' +
        '                </div><div class="dash">-&nbsp;</div>\n' +
        '                <div class="date_end"><input type="text" name="date_end" class="date_input date_end_input"></div>\n' +
        '            </div>\n' +
        '            <div class="priority">Приоритет:&nbsp;\n' +
        '                <span class="priority_value">\n' +
        '                        <select name="priority" class="priority_select">\n' +
        '                            <option value="high">Высокий</option>\n' +
        '                            <option value="medium">Средний</option>\n' +
        '                            <option value="low">Низкий</option>\n' +
        '                        </select>\n' +
        '                    </span>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="third_line">\n' +
        '            <div class="status">Статус:&nbsp;\n' +
        '                <span class="status_value">\n' +
        '                        <select name="status" class="status_select">\n' +
        '                            <option value="in_process">К выполнению</option>\n' +
        '                            <option value="done">Выполнена</option>\n' +
        '                            <option value="canceling">Отмена</option>\n' +
        '                        </select>\n' +
        '                    </span>\n' +
        '            </div>\n' +
        '            <div class="update">Дата обновления:&nbsp;<span class="update_value"><input type="text" name="updated" class="date_input update_input"></span></div>\n' +
        '        </div>\n' +
        '        <div class="fourth_line">' +
        '           <div class="responsible">Ответственный:&nbsp;<span class="responsible_value"><input type="text" name="responsible" class="fourth_line_input responsible_input" maxlength="20"></span></div>\n' +
        '        </div> \n' +
        '        <div class="description_line">\n' +
        '            <div class="description_header">Описание:</div>\n' +
        '        </div>\n' +
        '        <textarea class="textarea" accesskey name="description"></textarea>\n' +
        '        <button type="button" id="submit" class="submit">Сохранить</button>\n' +
        '        <div class="wrong_message"></div>' +
        '    </form>\n' +
        '</div>')
}


$('.date_input').each(function () {
    new Cleave (this, {
        date: true,
        delimiter: '.',
        datePatter: ['d', 'm', 'Y']
    })
})

$('.add_task_ico').on('click', (e) =>{
    // console.log($('.task').length)
    if ($('.task').length === 0) {
        addTask()
        $('.date_input').each(function () {
            new Cleave(this, {
                date: true,
                delimiter: '.',
                datePatter: ['d', 'm', 'Y']
            })
        })
    } else {
        $(this).each(function () {
            if ($('.task').hasClass('new')) {
                return false
            } else {
                addTask()
                $('.date_input').each(function () {
                    new Cleave(this, {
                        date: true,
                        delimiter: '.',
                        datePatter: ['d', 'm', 'Y']
                    })
                })
            }
        })
    }
})

$(document).on('click', '.submit', (e) =>{
    let $task = $(e.target).parent()
    if ($task.parent('.task').hasClass('new')) {
        let taskHeader = $task.children('.first_line').children('.task_header').children('.task_header_input').val()
        let dateStart = $task.children('.second_line').children('.date').children('.date_start').children('.date_start_input').val()
        let dateEnd = $task.children('.second_line').children('.date').children('.date_end').children('.date_end_input').val()
        let updated = $task.children('.third_line').children('.update').children('.update_value').children('.update_input').val()
        let responsible = $task.children('.fourth_line').children('.responsible').children('.responsible_value').children('.responsible_input').val()
        let description = $task.children('.textarea')

        let $wrongMessage = $task.children('.wrong_message')

        if (taskHeader.length < 1 || description < 1) {
            $wrongMessage.text('Корректно заполните каждое поле')
        } else if (dateStart.length !== 10 || dateEnd.length !== 10 || updated.length !== 10) {
            $wrongMessage.text('Корректно заполните каждое поле')
        } else {
            let details = $task.serialize()
            let nameTeam = $('.name_team').text()
            $.ajax({
                url: `/api/team/task/add/data/${nameTeam}`,
                type: 'POST',
                dataType: 'json',
                data: details,
                connectType: 'application/json',
                success:  (data) => {
                    if (data.result === true) {
                        window.location.pathname = `/teams/${nameTeam}`
                    }
                },
                error:  (err) => {
                    console.log(err)
                }
            })
        }
    }
})

$(document).on('click', '#pointer-down', (e) => {
    let $task = $(e.target).parents()
    if ($task.children('.description_container').hasClass('hidden')){
        $task.children('.description_container').removeClass('hidden')
        $task.children('.fourth_line').removeClass('hidden')
    } else {
        $task.children('.description_container').addClass('hidden')
        $task.children('.fourth_line').addClass('hidden')
    }
})

$('html').on('click', () => {
    $('.wrong_message').text('')
})

$(document).on('click', '#cross', (e) => {
    let $task = $(e.target).parents('.task')
    if ($task.hasClass('new')) {
        $task.remove()
    } else {
        $task.addClass('deleting')
        $('.confirm_deleting_background').removeClass('hidden')
        $('.confirm_deleting_box').removeClass('hidden')
    }
})

$(document).on('click', '.cancel_deleting_button', () => {
    $('.task').removeClass('deleting')
    $('.confirm_deleting_background').addClass('hidden')
    $('.confirm_deleting_box').addClass('hidden')
})

$(document).on('click', '.confirm_deleting_button', () => {
    let details = {id: $('.task.deleting').attr('id')}
    let nameTeam = $('.name_team').text()
    $.ajax({
        url: `/api/team/task/delete/data/${nameTeam}`,
        type: 'POST',
        dataType: 'json',
        data: details,
        connectType: 'application/json',
        success:  (data) => {
            console.log(data)
            if (data.result === true) {
                window.location.pathname = `/teams/${nameTeam}`
            }
        },
        error:  (err) => {
            console.log(err)
        }
    })

})

$(document).on('click', '.cancel_changing_button', () => {
    $('.changing_on').remove()
    $('.changing_off').removeClass('hidden').removeClass('changing_off')

})

$(document).on('click', '.confirm_changing_button', () => {
    let $changingTask = $('.changing_on')
    console.log($changingTask)
    let details = $changingTask.children('.new_task').serialize()
    let idTask = $changingTask.attr('id')



    let taskHeader = $changingTask.children('.new_task').children('.first_line').children('.task_header').children('.task_header_input').val()
    let dateStart = $changingTask.children('.new_task').children('.second_line').children('.date').children('.date_start').children('.date_start_input').val()
    let dateEnd = $changingTask.children('.new_task').children('.second_line').children('.date').children('.date_end').children('.date_end_input').val()
    let updated = $changingTask.children('.new_task').children('.third_line').children('.update').children('.update_value').children('.update_input').val()
    let description = $changingTask.children('.new_task').children('.textarea')

    let $wrongMessage = $changingTask.children('.new_task').children('.wrong_message')
    if (taskHeader.length < 1 || description < 1) {
        $wrongMessage.text('Корректно заполните каждое поле')
    } else if (dateStart.length !== 10 || dateEnd.length !== 10 || updated.length !== 10) {
        $wrongMessage.text('Корректно заполните каждое поле')
    } else {

        let data =  details + '&idtask=' + idTask

        $.ajax({
            url: '/api/task/changing/data',
            type: 'POST',
            dataType: 'json',
            data: data,
            connectType: 'application/json',
            success:  (data) => {
                console.log(data)
                if (data.result === true) {
                    window.location.pathname = '/'
                }
            },
            error:  (err) => {
                console.log(err)
            }
        })
    }
})


