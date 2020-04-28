$(document).ready(function () {

    // Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: true
        });
    }


    // Posts
    if (window.location.href.indexOf('index') > -1) {
        let posts = [
            {
                title: 'Prueba de título 1',
                date: `Publicado el día ${moment().date()} de ${moment().format('MMMM')} de ${moment().year()}`,
                content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab suscipit porro odio recusandae illo.
                Ipsum enim eius velit doloremque numquam temporibus ea ullam minus itaque delectus, amet fuga,
                quo maxime?</p>`
            },
            {
                title: 'Prueba de título 2',
                date: `Publicado el día ${moment().date()} de ${moment().format('MMMM')} de ${moment().year()}`,
                content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab suscipit porro odio recusandae illo.
                Ipsum enim eius velit doloremque numquam temporibus ea ullam minus itaque delectus, amet fuga,
                quo maxime?</p>`
            },
            {
                title: 'Prueba de título 3',
                date: `Publicado el día ${moment().date()} de ${moment().format('MMMM')} de ${moment().year()}`,
                content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab suscipit porro odio recusandae illo.
                Ipsum enim eius velit doloremque numquam temporibus ea ullam minus itaque delectus, amet fuga,
                quo maxime?</p>`
            },
            {
                title: 'Prueba de título 4',
                date: `Publicado el día ${moment().date()} de ${moment().format('MMMM')} de ${moment().year()}`,
                content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab suscipit porro odio recusandae illo.
                Ipsum enim eius velit doloremque numquam temporibus ea ullam minus itaque delectus, amet fuga,
                quo maxime?</p>`
            },
            {
                title: 'Prueba de título 5',
                date: `Publicado el día ${moment().date()} de ${moment().format('MMMM')} de ${moment().year()}`,
                content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab suscipit porro odio recusandae illo.
                Ipsum enim eius velit doloremque numquam temporibus ea ullam minus itaque delectus, amet fuga,
                quo maxime?</p>`
            },
            {
                title: 'Prueba de título 6',
                date: `Publicado el día ${moment().date()} de ${moment().format('MMMM')} de ${moment().year()}`,
                content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab suscipit porro odio recusandae illo.
                Ipsum enim eius velit doloremque numquam temporibus ea ullam minus itaque delectus, amet fuga,
                quo maxime?</p>`
            }
        ];

        posts.forEach((item, index) => {
            let post = `
                <article class="post" key=${index}>
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <button href="#" id="btn-more">Leer más</button>
                </article>
            `;

            $('#posts').append(post);
        });
    }

    // Selector de tema
    let theme = $('#theme');

    $('#to-green').click(() => {
        theme.attr('href', 'css/green.css')
    });

    $('#to-red').click(() => {
        theme.attr('href', 'css/red.css')
    });

    $('#to-blue').click(() => {
        theme.attr('href', 'css/blue.css')
    });

    // Scroll go-up

    $('.go-up').click((e) => {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Login

    $('#login form').submit(() => {
        let inputName = $('#input-name').val();

        localStorage.setItem('user_name', inputName);
        location.reload();
    });

    let userName = localStorage.getItem('user_name');

    if (userName !== null && userName !== undefined) {
        let aboutParagraph = $('#about p');

        aboutParagraph.html(`<strong>Bienvenido, ${userName}</strong>`);
        aboutParagraph.append(`<a href="#" id="logout">Cerrar sesión</a>`);

        $('#login').hide();

        $('#logout').click(() => {
            localStorage.clear();
            location.reload();

        });
    }

    // Accordion
    if (window.location.href.indexOf('about') > -1) {
        $('#accordion').accordion();
    }

    //Clock
    if (window.location.href.indexOf('clock') > -1) {
        setInterval(() => {
            let clock = moment().format('hh:mm:ss');
            $('#clock').html(clock);
        }, 1000);
    }

    // Validation

    if (window.location.href.indexOf('contact') > -1) {

        $('form input[name="date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            validateOnBlur: false,
            errorMessagePosition: 'top',
            scrollToTopOnError: true,
        });
    }
})