function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    if (passwordField !== null) {
        if (passwordField.value.trim() !== '') {
            passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
        }
    }
}

function checkPasswordCriteria() {
    // Get the password input element
    const passwordField = document.getElementById('mobilePasswordField');

    // Check the criteria and update checkboxes accordingly
    document.getElementById('uppercaseCheckbox').checked = /[A-Z]/.test(passwordField.value);
    document.getElementById('lowercaseCheckbox').checked = /[a-z]/.test(passwordField.value);
    document.getElementById('specialCharCheckbox').checked = /[^A-Za-z0-9]/.test(passwordField.value);
    document.getElementById('numberCheckbox').checked = /\d/.test(passwordField.value);
    document.getElementById('lengthCheckbox').checked = passwordField.value.length >= 8;
}