import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', inputValue);
function inputValue(evt) {
  evt.preventDefault();
}
let email = input.email;
localStorage.setItem('feedback-form-state', JSON.stringify(email));
let message = input.message;
localStorage.setItem('feedback-form-state', JSON.stringify(message));
console.log(email);
