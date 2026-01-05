const form = document.getElementById('contact-form');
const modal = document.getElementById('modal-form-confirmation');
const closeModalBtn = document.getElementById('modal-close-button');
const radioGroup = form['plage-horaire'];
const radioError = document.querySelector('#radio-group + .error-message');

const regexText = /^[a-zA-ZÀ-ÿ\s\-]+$/;
const regexDate = /^\d{2}\/\d{2}\/\d{4}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelephone = /^(06|07)\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/;

function validateFields(input, condition, message) {
    const errorSpan = input.nextElementSibling.nextElementSibling;
    if (!condition) {
        errorSpan.textContent = message;
        input.setAttribute('aria-invalid', 'true');
        return false;
    } else {
        errorSpan.textContent = "";
        input.removeAttribute('aria-invalid');
        return true;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && !modal.hasAttribute('hidden')) {
        modal.setAttribute('hidden', 'true');
        document.getElementById('submit-button').focus();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;
    const isRadioSelected = radioGroup.value !== "";

    isFormValid &= validateFields(document.getElementById('nom'), regexText.test(form.nom.value), "Nom invalide.");
    isFormValid &= validateFields(document.getElementById('prenom'), regexText.test(form.prenom.value), "Prénom invalide.");

    isFormValid &= validateFields(document.getElementById('date-naissance'), regexDate.test(form['date-naissance'].value), "Format JJ/MM/AAAA requis.");

    isFormValid &= validateFields(document.getElementById('email'), regexEmail.test(form.email.value), "Email invalide.");
    isFormValid &= validateFields(document.getElementById('telephone'), regexTelephone.test(form.telephone.value), "Format 06/07 XX XX XX XX requis.");

    isFormValid &= validateFields(document.getElementById('message'), form.message.value.length >= 10, "Minimum 10 caractères requis.");

    if (!isRadioSelected) {
        radioError.textContent = "Veuillez choisir une plage horaire.";
        isFormValid = false;
    } else {
        radioError.textContent = "";
    }

    if (isFormValid) {
        modal.removeAttribute('hidden');
        closeModalBtn.focus();
        form.reset();
    }
});

modal.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        const focusableContent = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    }
});

closeModalBtn.addEventListener('click', () => modal.setAttribute('hidden', 'true'));