'use strict';

// BOM - Browser Object Model
function getBOM() {
    console.log('Window inner width', window.innerWidth);
    console.log('Window inner height', window.innerHeight);
    console.log('Window location', window.location);

    console.log('Screen width', screen.width);
    console.log('Screen height', screen.height);
}

function redirection(url) {
    window.location.href = url;
}

function openWindow(url) {
    window.open(url, '', 'width=400px, height=400px');
}

getBOM();