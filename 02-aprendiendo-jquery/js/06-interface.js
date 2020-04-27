$(document).ready(function () {

    // Mover elemento por la página
    $('.elemento').draggable();

    // Redimensionar elemento
    $('.elemento').resizable();

    // Seleccionar elementos
    // $('.lista-seleccionable').selectable();

    // Ordenar elementos
    $('.lista-seleccionable').sortable({
        update: (e, ui) => {
            console.log('Ha cambiado la lista')
        }
    });

    // Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: () => { console.log('Has soltado algo dentro del area') }
    });

    // Efectos
    $('#mostrar').click(() => {
        // $('.caja-efectos').effect('explode');
        // $('.caja-efectos').toggle('explode');
        // $('.caja-efectos').toggle('blind');
        // $('.caja-efectos').toggle('drop');
        // $('.caja-efectos').toggle('fold');
        // $('.caja-efectos').toggle('puff', 'slow');
        // $('.caja-efectos').toggle('scale', {});
        $('.caja-efectos').toggle('shake', 4000);
    })

    // Tooltip
    $(document).tooltip();

    // Dialog
    $('#lanzar-popup').click(() => {
        $('.popup').dialog();
    });

    // Datepicker
    $('#calendario').datepicker();

    // Tabs
    $('#tabs').tabs();
})