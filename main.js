let buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        toggleForms(buttons[i].getAttribute('form'));
    }
}

function toggleForms(formName) {
    let showForm = formName;
    let hiddenForms = [];

    switch (formName) {
        case 'reset-form':
            hiddenForms.push('login-form', 'register-form')
            break;
        case 'register-form':
            hiddenForms.push('reset-form', 'login-form')
            break;
        case 'login-form':
            hiddenForms.push('register-form', 'reset-form')
            break;
    }

    for (let i = 0; i < hiddenForms.length; i++) {
        document.getElementById(hiddenForms[i]).className = 'hidden';
    }
    document.getElementById(showForm).className = 'show';
}