const button = document.getElementById('modal-login');

button.addEventListener('click', () => {
    const input = document.getElementById('modal-input');
    const password = document.getElementById('modal-password');

    const inputElement = input.value;  
    const passwordElement = password.value;  

    if (inputElement === 'admin' && passwordElement === 'root') {
        window.location.href = 'view.html';
    } else {
        alert('Invalid password or username, try again!');
    }
});
