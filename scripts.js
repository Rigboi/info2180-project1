/* Add your JavaScript to this file */
window.addEventListener('load', function () {
    let form = document.querySelector('.newsletter form');
    let emailField = document.getElementById('email');
    let message = document.querySelector('.message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let email = emailField.value.trim();

        if (email === '') {
            message.textContent = 'Please enter a valid email address.';
        } else {
            message.textContent = 'Thank you! Your email address ' + email + ' has been added to our mailing list!';
        }
    });
});
