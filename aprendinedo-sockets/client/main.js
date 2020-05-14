let socket = io.connect('http://192.168.1.104:6677', { 'forceNew': true });

socket.on('messages', (data) => {
    render(data);
});

function render(data) {
    let html = data.map((message, index) => {
        return (`
            <div class="message" key="${index}">
                <strong>${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');

    let divMessages = document.getElementById('messages');
    divMessages.innerHTML = html;
    divMessages.scrollTop = divMessages.scrollHeight;
}

function addMessage(e) {
    let payload = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message', payload);
    document.getElementById('text').value = '';
    return false;
}