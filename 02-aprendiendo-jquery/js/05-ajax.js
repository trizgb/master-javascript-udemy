$(document).ready(function () {

    // Load
    // $('#datos').load('https://reqres.in/');

    // Get y Post
    $.get('https://reqres.in/api/users', { page: 2 }, function (response) {
        response.data.forEach((e, i) => {
            $('#datos').append('<p>' + e.first_name + ' ' + e.last_name + '</p>')
        });
    });


    $('#formulario').submit(function (e) {
        e.preventDefault();

        let usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        }

        // $.post($(this).attr('action'), usuario, function (response) {
        //     console.log(response);
        // }).done(function () {
        //     alert('Usuario añadido correctamente');
        // });

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: usuario,
            beforeSend: () => console.log('Enviando usuario...'),
            success: (response) => console.log(response),
            error: () => console.log('Ha ocurrido un error'),
            timeout: 1000
        })

        return false;
    });
})