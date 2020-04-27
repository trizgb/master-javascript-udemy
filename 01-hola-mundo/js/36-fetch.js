'use strict';

// Fetch (ajax) y peticiones a servicioes / API REST
let usersDiv = document.querySelector('#users');
let userDiv = document.querySelector('#user');
let teacherDiv = document.querySelector('#teacher');

let users = [];

getUsers()
    .then(response => response.json())
    .then(data => {
        usersList(data.data);
        return getInfo();
    })
    .then(data => {
        teacherDiv.innerHTML = data;
        return getJanet();
    })
    .then(response => response.json())
    .then(user => {
        showJanet(user.data);
    })
    .catch(error => {
        console.log(error);
        alert('Error en las peticiones');
    })

function getUsers() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch(`https://reqres.in/api/users/2`)
}

function getInfo() {
    let teacher = {
        name: 'Yo',
        surname: 'Ye',
        url: 'yo@yo.com'
    };

    return new Promise((resolve, reject) => {
        let teacherString = '';

        setTimeout(() => {
            teacherString = JSON.stringify(teacher);

            if (typeof teacherString !== 'string' || teacherString === '') return reject('error 1');

            return resolve(teacherString);
        }, 3000);

    });
}

function showJanet(user) {
    let name = document.createElement('h4');
    let avatar = document.createElement('img');

    name.innerHTML = user.first_name + ' ' + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    userDiv.appendChild(name);
    userDiv.appendChild(avatar);

    document.querySelector('.loading-user').style.display = 'none';
}

function usersList(users) {
    users.map((u, i) => {
        let name = document.createElement('h3');

        name.innerHTML = i + '.' + ' ' + u.first_name + ' ' + u.last_name;
        usersDiv.appendChild(name);

        document.querySelector('.loading').style.display = 'none';
    });

}



