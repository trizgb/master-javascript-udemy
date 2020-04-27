$(document).ready(function () {

    let caja = $('#caja');
    let showBtn = $('#show-button');
    let hideBtn = $('#hide-button');
    let todoEnUnoBtn = $('#todo-en-uno');
    let animarBtn = $('#animar');

    // caja.hide();
    hideBtn.hide();

    showBtn.click(function () {
        // caja.show('fast');
        // caja.fadeIn();
        caja.fadeTo('slow', 1)
        $(this).hide();
        hideBtn.show();
    });

    hideBtn.click(function () {
        // caja.hide('fast');
        caja.fadeOut('slow', function() {
            console.log('Cartel ocultado')
        });
        hideBtn.hide();
        showBtn.show();
    });

    todoEnUnoBtn.click(function () {
        caja.toggle('fast');
    });

    animarBtn.click(function () {
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
        }, 'slow')
            .animate({
                borderRadius: '990px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0',
                marginLeft: '0',
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow')
    });

})