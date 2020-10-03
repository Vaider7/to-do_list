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


$('.date_input').each(function () {
    new Cleave (this, {
        date: true,
        delimiter: '.',
        datePatter: ['d', 'm', 'Y']
    })
})

$('.add_task_ico').on('click', (e) =>{
    $('.task').each(function (){
        if ($(this).hasClass('new')) {
            return false
        }
        else {
            $('.header_container').after('' +
                '<div class="task new">\n' +
                '    <form class="new_task">\n' +
                '        <div class="first_line">\n' +
                '            <div class="task_header"><input type="text" name="task_header" class="task_header_input" placeholder="Заголовок"></div>\n' +
                '            <div class="buttons">\n' +
                '                <svg version="1.1" id="gear" class="ico" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                '                     viewBox="0 0 368 368" style="enable-background:new 0 0 368 368;" xml:space="preserve">\n' +
                '    <g>\n' +
                '        <g>\n' +
                '            <path d="M344,144h-29.952c-2.512-8.2-5.8-16.12-9.792-23.664l21.16-21.16c4.528-4.528,7.024-10.56,7.024-16.984\n' +
                '                c0-6.416-2.496-12.448-7.024-16.976l-22.64-22.64c-9.048-9.048-24.888-9.072-33.952,0l-21.16,21.16\n' +
                '                c-7.536-3.992-15.464-7.272-23.664-9.792V24c0-13.232-10.768-24-24-24h-32c-13.232,0-24,10.768-24,24v29.952\n' +
                '                c-8.2,2.52-16.12,5.8-23.664,9.792l-21.168-21.16c-9.36-9.36-24.592-9.36-33.952,0l-22.648,22.64\n' +
                '                c-9.352,9.36-9.352,24.592,0,33.952l21.16,21.168c-3.992,7.536-7.272,15.464-9.792,23.664H24c-13.232,0-24,10.768-24,24v32\n' +
                '                C0,213.232,10.768,224,24,224h29.952c2.52,8.2,5.8,16.12,9.792,23.664l-21.16,21.168c-9.36,9.36-9.36,24.592,0,33.952\n' +
                '                l22.64,22.648c9.36,9.352,24.592,9.352,33.952,0l21.168-21.16c7.536,3.992,15.464,7.272,23.664,9.792V344\n' +
                '                c0,13.232,10.768,24,24,24h32c13.232,0,24-10.768,24-24v-29.952c8.2-2.52,16.128-5.8,23.664-9.792l21.16,21.168\n' +
                '                c9.072,9.064,24.912,9.048,33.952,0l22.64-22.64c4.528-4.528,7.024-10.56,7.024-16.976c0-6.424-2.496-12.448-7.024-16.976\n' +
                '                l-21.16-21.168c3.992-7.536,7.272-15.464,9.792-23.664H344c13.232,0,24-10.768,24-24v-32C368,154.768,357.232,144,344,144z\n' +
                '                 M352,200c0,4.408-3.584,8-8,8h-36c-3.648,0-6.832,2.472-7.744,6c-2.832,10.92-7.144,21.344-12.832,30.976\n' +
                '                c-1.848,3.144-1.344,7.144,1.232,9.72l25.44,25.448c1.504,1.504,2.336,3.512,2.336,5.664c0,2.152-0.832,4.16-2.336,5.664\n' +
                '                l-22.64,22.64c-3.008,3.008-8.312,3.008-11.328,0l-25.44-25.44c-2.576-2.584-6.576-3.08-9.728-1.232\n' +
                '                c-9.616,5.68-20.04,10-30.968,12.824c-3.52,0.904-5.992,4.088-5.992,7.736v36c0,4.408-3.584,8-8,8h-32c-4.408,0-8-3.592-8-8v-36\n' +
                '                c0-3.648-2.472-6.832-6-7.744c-10.92-2.824-21.344-7.136-30.976-12.824c-1.264-0.752-2.664-1.112-4.064-1.112\n' +
                '                c-2.072,0-4.12,0.8-5.664,2.344l-25.44,25.44c-3.128,3.12-8.2,3.12-11.328,0l-22.64-22.64c-3.128-3.128-3.128-8.208,0-11.328\n' +
                '                l25.44-25.44c2.584-2.584,3.088-6.584,1.232-9.72c-5.68-9.632-10-20.048-12.824-30.976c-0.904-3.528-4.088-6-7.736-6H24\n' +
                '                c-4.408,0-8-3.592-8-8v-32c0-4.408,3.592-8,8-8h36c3.648,0,6.832-2.472,7.744-6c2.824-10.92,7.136-21.344,12.824-30.976\n' +
                '                c1.856-3.144,1.352-7.144-1.232-9.72l-25.44-25.44c-3.12-3.12-3.12-8.2,0-11.328l22.64-22.64c3.128-3.128,8.2-3.12,11.328,0\n' +
                '                l25.44,25.44c2.584,2.584,6.576,3.096,9.72,1.232c9.632-5.68,20.048-10,30.976-12.824c3.528-0.912,6-4.096,6-7.744V24\n' +
                '                c0-4.408,3.592-8,8-8h32c4.416,0,8,3.592,8,8v36c0,3.648,2.472,6.832,6,7.744c10.928,2.824,21.352,7.144,30.968,12.824\n' +
                '                c3.152,1.856,7.152,1.36,9.728-1.232l25.44-25.44c3.016-3.024,8.32-3.016,11.328,0l22.64,22.64\n' +
                '                c1.504,1.504,2.336,3.52,2.336,5.664s-0.832,4.16-2.336,5.664l-25.44,25.44c-2.576,2.584-3.088,6.584-1.232,9.72\n' +
                '                c5.688,9.632,10,20.048,12.832,30.976c0.904,3.528,4.088,6,7.736,6h36c4.416,0,8,3.592,8,8V200z"/>\n' +
                '        </g>\n' +
                '    </g>\n' +
                '                    <g>\n' +
                '                            <g>\n' +
                '                                <path d="M184,112c-39.696,0-72,32.304-72,72s32.304,72,72,72c39.704,0,72-32.304,72-72S223.704,112,184,112z M184,240\n' +
                '                c-30.88,0-56-25.12-56-56s25.12-56,56-56c30.872,0,56,25.12,56,56S214.872,240,184,240z"/>\n' +
                '                            </g>\n' +
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
                '                    <g>\n' +
                '                        </g>\n' +
                '    </svg>\n' +
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
                '                <svg version="1.1" id="pointer-down" class="ico" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                '                     viewBox="0 0 490.688 490.688" style="enable-background:new 0 0 490.688 490.688;" xml:space="preserve">\n' +
                '    <path style="fill:#FFC107;" d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262\n' +
                '        c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667\n' +
                '        c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262\n' +
                '        L472.328,120.529z"/>\n' +
                '                    <path d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083\n' +
                '        c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262\n' +
                '        c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279\n' +
                '        C250.748,372.281,248.039,373.408,245.213,373.415z"/>\n' +
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
                '                <div class="days_left"><span class="days_left_value"></span></div>\n' +
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
                '                            <option value="done">Выполнен</option>\n' +
                '                            <option value="canceling">Отмена</option>\n' +
                '                        </select>\n' +
                '                    </span>\n' +
                '            </div>\n' +
                '            <div class="update">Дата обновления:&nbsp;<span class="update_value"><input type="text" name="updated" class="date_input update_input"></span></div>\n' +
                '        </div>\n' +
                '        <div class="description_line">\n' +
                '            <div class="description_header">Описание:</div>\n' +
                '        </div>\n' +
                '        <textarea class="textarea" accesskey name="description"></textarea>\n' +
                '        <button type="button" id="submit" class="submit">Сохранить</button>\n' +
                '        <div class="wrong_message"></div>                                                                    ' +
                '    </form>\n' +
                '</div>')

            $('.date_input').each(function () {
                new Cleave (this, {
                    date: true,
                    delimiter: '.',
                    datePatter: ['d', 'm', 'Y']
                })
            })
        }
    })
})

$(document).on('click', '.submit', (e) =>{
    let $task = $(e.target).parent()
    if ($task.parent('.task').hasClass('new')) {
        let taskHeader = $task.children('.first_line').children('.task_header').children('.task_header_input').val()
        let dateStart = $task.children('.second_line').children('.date').children('.date_start').children('.date_start_input').val()
        let dateEnd = $task.children('.second_line').children('.date').children('.date_end').children('.date_end_input').val()
        let updated = $task.children('.third_line').children('.update').children('.update_value').children('.update_input').val()
        let description = $task.children('.textarea')

        let $wrongMessage = $task.children('.wrong_message')

        if (taskHeader.length < 1 || description < 1) {
            $wrongMessage.text('Корректно заполните каждое поле')
        } else if (dateStart.length !== 10 || dateEnd.length !== 10 || updated.length !== 10) {
            $wrongMessage.text('Корректно заполните каждое поле')
        } else {
            let details = $task.serialize()
            console.log(details)
            $.ajax({
                url: '/api/task/data',
                type: 'POST',
                dataType: 'json',
                data: details,
                connectType: 'application/json',
                success:  (data) => {
                    console.log(data.result)
                    if (data.result === true) {
                        window.location.pathname = '/'
                    } else {
                        $('.wrong_message').text(data.result)
                    }
                },
                error:  (err) => {
                    console.log(err)
                }
            })
        }
    }
})

$('html').on('click', () => {
    $('.wrong_message').text('')
})



