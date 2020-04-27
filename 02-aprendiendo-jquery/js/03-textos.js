$(document).ready(function () {
    reloadLinks();

    $('#add-button')
        .removeAttr('disabled')
        .click(function () {
            // Añadir al final
            // $('#menu').append('<li><a href="'+$('#add-link').val()+'"`></a></li>');

            // Añadir al principio
            $('#menu').prepend('<li><a href="' + $('#add-link').val() + '"`></a></li>');

            // Añade antes pero fuera
            // $('#menu').before('<li><a href="'+$('#add-link').val()+'"`></a></li>');

            // Añade después pero fuera
            // $('#menu').before('<li><a href="'+$('#add-link').val()+'"`></a></li>');

            $('#add-link').val('')
            reloadLinks();
        });

})

function reloadLinks() {
    $('a').each(function (index) {
        let th = $(this);
        let enlace = th.attr('href');

        th.attr('target', '_blank');

        th.text(enlace);
    });
}