'use strict';

$(document).ready(() => {

    // Selector de id
    $('#rojo').css('background', 'red')
        .css('color', 'white');

    $('#amarillo').css('background', 'yellow')
        .css('color', 'green');

    $('#verde').css('background', 'green')
        .css('color', 'white');

    // Selector de clase
    let miClase = $('.cebra').css('padding', '5px');

    $('.sin-borde').click(function () {
        console.log('Click dado!')
        $(this).addClass('cebra');
    })

    // Selector de etiqueta
    let parrafos = $('p').css('cursor', 'pointer');

    parrafos.click(function () {
        let that = $(this);

        if (!that.hasClass('grande')) {
            that.addClass('grande');
        } else {
            that.removeClass('grande');
        }
    });

    // Selector atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    // Otros
    $('p, a').addClass('margen-superior');

    // let busqueda = $('#caja .resaltado').eq(0).parent().parent().find('[title="Google"]');
    let busqueda = $('#elemeto2').parent().parent().find('.resaltado');
    console.log(busqueda);
});
