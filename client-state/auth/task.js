const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const control = Array.from(document.querySelectorAll('.control'));
const userId = document.getElementById('user_id');

const storedId = localStorage.getItem('user_id');

if (storedId) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = storedId;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    let login = control[0];
    let password = control[1];

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', login, password);

    const formData = new FormData(form);

    xhr.send(formData);

    xhr.onload = function() {
        if (String(xhr.status).startsWith(2)) { 
            let response = JSON.parse(xhr.response);

            if (response.success) {
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                localStorage.setItem('user_id', response.user_id);
                userId.textContent = response.user_id;
                console.log(localStorage);
            } else {
                alert('Неверный логин/пароль');
                form.reset();
            }
        } else {
            alert( 'Ошибка: ' + xhr.status);
            return;
        }
    }
});