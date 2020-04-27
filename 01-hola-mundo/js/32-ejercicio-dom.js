'use strict';

let form = document.querySelector('#form');
let nameField = document.querySelector('#name');
let surnameField = document.querySelector('#surname');
let ageField = document.querySelector('#age');
let submitButton = document.querySelector('#submit');
let boxDashed = document.querySelector('.dashed');

boxDashed.style.display = 'none';

function borderStyles(element, state) {
    if (state === 'initial') {
        element.style.border = '1px solid grey';
        element.style.borderRadius = '50px';
    }

    if (state === 'error') {
        element.style.border = '2px solid red';
    }
}

borderStyles(nameField, 'initial');
borderStyles(surnameField, 'initial');
borderStyles(ageField, 'initial');

function onSubmitForm() {
    let name = nameField.value;
    let surname = surnameField.value;
    let age = parseInt(ageField.value);


    if (name.trim() === null || name.trim().length === 0) {
        // alert('El nombre no es válido');
        let assistiveText = document.querySelector('#name-error');

        assistiveText.innerHTML = 'El nombre no es válido';
        assistiveText.style.color = 'red';
        assistiveText.style.fontSize = '10px';
        borderStyles(nameField, 'error');
        return false;
    } else {
        borderStyles(nameField, 'initial');
    }

    if (surname.trim() === null || surname.trim().length === 0) {
        // alert('Los apellidos no son válidos');
        borderStyles(surnameField, 'error');
        return false;
    } else {
        borderStyles(surnameField, 'initial');
    }

    if (age === null || age <= 0 || isNaN(age)) {
        // alert('La edad no es válida');
        borderStyles(ageField, 'error');
        return false;
    } else {
        borderStyles(ageField, 'initial');
    }

    boxDashed.style.display = 'block';

    let userData = [name, surname, age];

    let pName = document.querySelector('#p-name span');
    let pSurname = document.querySelector('#p-surname span');
    let pAge = document.querySelector('#p-age span');

    // Forma 1
    pName.innerHTML = userData[0];
    pSurname.innerHTML = userData[1];
    pAge.innerHTML = userData[2];

    // Forma 2
    // let index;
    // for (index in userData) {
    //     let paragraph = document.createElement('p');
    //     paragraph.append(userData[index]);
    //     boxDashed.append(paragraph);
    // }
}

form.addEventListener('submit', onSubmitForm);