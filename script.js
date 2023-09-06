function validateForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('pwd');
    const emailError = document.getElementById('emailError');

    // Email validation (checking for '@' symbol)
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Email is not valid';
        emailError.style.color = 'red';
        emailInput.focus();
        return false;
    } else {
        emailError.textContent = ''; // Clear the error message
    }

    // Password validation (at least one uppercase, one lowercase, one number, and one symbol)
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        alert('Password should contain at least one uppercase, one lowercase, one number, and one special symbol. Minimum length is 8 characters.');
        passwordInput.focus();
        return false;
    }

    return true; // Form is valid
}
