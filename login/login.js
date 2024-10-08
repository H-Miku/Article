document.addEventListener('DOMContentLoaded', function () {
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
    const loginPasswordField = document.getElementById('loginPassword');
    const registerPasswordField = document.getElementById('registerPassword');
    const loginForm = document.getElementById('loginFormSubmit');
    const registerForm = document.getElementById('registerFormSubmit');
    
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginFormContainer = document.getElementById('loginForm');
    const registerFormContainer = document.getElementById('registerForm');

    // Toggle password visibility
    toggleLoginPassword.addEventListener('click', function () {
        const type = loginPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
        loginPasswordField.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    toggleRegisterPassword.addEventListener('click', function () {
        const type = registerPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
        registerPasswordField.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    // Switch between Login and Register forms
    showRegister.addEventListener('click', function () {
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'block';
    });

    showLogin.addEventListener('click', function () {
        loginFormContainer.style.display = 'block';
        registerFormContainer.style.display = 'none';
    });

    // Form validation for Login
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting

        const username = document.getElementById('loginUsername').value.trim();
        const password = loginPasswordField.value.trim();

        if (username === '' || password === '') {
            alert('Please fill in all fields.');
        } else if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
        } else {
            // Add your form submission logic here
           // alert('Login successful');
        }
    });

    // Form validation for Register
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting

        const username = document.getElementById('registerUsername').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = registerPasswordField.value.trim();

        if (username === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
        } else if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
        } else {
            // Add your form submission logic here
            alert('Registration successful');
        }
    });
});