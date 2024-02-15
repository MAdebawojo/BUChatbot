let currentStep = 1;

function updateSectionHeading() {
    for (let i = 1; i <= 3; i++) {
        const sectionHeading = document.querySelector(`.section-heading:nth-child(${i})`);
        const isCurrentStep = i === currentStep;

        sectionHeading.querySelector('h2').style.color = isCurrentStep ? 'black' : '#888';
        sectionHeading.querySelector('.underlined-text').style.borderColor = isCurrentStep ? 'black' : '#ccc';
        sectionHeading.style.fontWeight = isCurrentStep ? 'bold' : 'normal';
    }
}

function checkPasswordCriteria() {
    const passwordField = document.getElementById('desktopPasswordField');

    document.getElementById('desktopUpperCaseCheckbox').checked = /[A-Z]/.test(passwordField.value);
    document.getElementById('desktopLowerCaseCheckbox').checked = /[a-z]/.test(passwordField.value);
    document.getElementById('desktopSpecialCharCheckbox').checked = /[^A-Za-z0-9]/.test(passwordField.value);
    document.getElementById('desktopNumberCheckbox').checked = /\d/.test(passwordField.value);
    document.getElementById('desktopLengthCheckbox').checked = passwordField.value.length >= 8;
}

function changeStep(step) {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep = step;
    updateSectionHeading();
    document.getElementById(`step${currentStep}`).classList.add('active');
}

function nextStep() {
    const nextStep = currentStep + 1;
    if (nextStep <= 3) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep = nextStep;
        updateSectionHeading();
        document.getElementById(`step${currentStep}`).classList.add('active');
    }
}

function prevStep() {
    const prevStep = currentStep - 1;
    if (prevStep >= 1) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep = prevStep;
        updateSectionHeading();
        document.getElementById(`step${currentStep}`).classList.add('active');
    }
}

function finish() {
    alert("Registration completed!");
}

updateSectionHeading();
// checkPasswordCriteria();
