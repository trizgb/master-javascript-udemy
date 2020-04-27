$(document).ready(function () {

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: true
    });

    // Posts
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

})