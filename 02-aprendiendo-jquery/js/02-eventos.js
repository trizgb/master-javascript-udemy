$(document).ready(function () {
    // Mouseover y Mouseout
    let caja = $('#caja');

    /*
    caja.mouseover(function () {
        $(this).css('background', 'red');
    });
    caja.mouseout(function () {
        $(this).css('background', 'green');
    })
    */

    function cambiaRojo() {
        $(this).css('background', 'red');
    }

    function cambiaVerde() {
        $(this).css('background', 'green');

    }

    // Hover
    caja.hover(cambiaRojo, cambiaVerde);

    // Click, Doble Click
    caja.click(function () {
        $(this).css('background', 'blue')
            .css('color', 'white');
    });

    caja.dblclick(function () {
        $(this).css('background', 'pink');
    });

    // Focus y Blur
    let nombre = $('#nombre');
    let datos = $('#datos');

    nombre.focus(function () {
        $(this).css('border', '2px solid green')
            .css('outline', 'none');
    });

    nombre.blur(function () {
        $(this).css('border', '1px solid #ccc');

        datos.text($(this).val()).show();
    });

    // Mousedown y Mouseup
    datos.mousedown(function () {
        $(this).css('border-color', 'gray');
    });

    datos.mouseup(function () {
        $(this).css('border-color', 'black');
    });

    // Mousemove

    $(document).mousemove(function () {
        let sigueme = $('#sigueme');
        $('body').css('cursor', 'none');

        sigueme.css('left', event.clientX)
               .css('top', event.clientY);
    });
});