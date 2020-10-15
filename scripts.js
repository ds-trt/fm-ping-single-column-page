const email = document.querySelector('.notify__email');
const error_msg = document.querySelector('.notify__error');

function validateEmail(e) { 
    e.preventDefault();
    if(email.validity.typeMismatch || email.validity.valueMissing) {
        error_msg.classList.remove('notify__error--hidden');
        email.classList.add('notify__email--error');
    } else {
        error_msg.classList.add('notify__error--hidden');
        email.classList.remove('notify__email--error');
        form.submit();
    }
}