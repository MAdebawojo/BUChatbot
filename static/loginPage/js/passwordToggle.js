function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    if (passwordField !== null) {
        if (passwordField.value.trim() !== '') {
            passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
        }
    }
}