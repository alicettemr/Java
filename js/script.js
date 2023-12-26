"use strict"

let passwordInput = document.getElementById('password');
function validatePassword() {
    let passwordError = document.getElementById('mdpError');
    let passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.[!@#$%^&()_+{}[]:;<>,.?~\/-]).{8,}$/;

    if (passwordRegex.test(passwordInput.value) && passwordInput.value.length >= 8) {
        passwordError.textContent = ''; 
    } else {
        passwordError.textContent = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.';
    }
}
passwordInput.addEventListener('input',validatePassword)


document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon= document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

burgerIcon.addEventListener('click', function() {
    menu.classList.toggle('active');
});

});


document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    });
});