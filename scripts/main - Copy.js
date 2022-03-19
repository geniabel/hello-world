
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.textContent = `Click count: ${event.detail}`;
});


document.querySelector('html').addEventListener('Submit', function() {
  alert('Ouch! Stop poking me!');
});


const nameEl = document.querySelector('name');
const mailEl = document.querySelector('mail');
const msgEl = document.querySelector('msg');
const button = document.querySelector('submit');


const checkname = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Name cannot be blank.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
}

const checkmail = () => {
    let valid = false;
    const mail = mailEl.value.trim();
    if (!isRequired(mail)) {
        showError(mailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(mailEl, 'Email is not valid.')
    } else {
        showSuccess(mailEl);
        valid = true;
    }
    return valid;
}

const checkmsg = () => {
    let valid = false;
    const msg = msgEl.value.trim();
    if (!isRequired(msg)) {
        showError(msgEl, 'Message cannot be blank.');
    } else if (!ismsgValid(msg)) {
        showError(msgEl, 'Nessage is not valid.')
    } else {
        showSuccess(msgEl);
        valid = true;
    }
    return valid;
}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isnameValid = checkname(),
        ismailValid = checkmail(),
        ismsgValid = checkmsg(),

    let isFormValid = isnameValid &&
        ismailValid &&
        ismsgdValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
