const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const card = document.querySelector('.card');
const xhr = new XMLHttpRequest();

function findErrors() {
    if (String(xhr.status).startsWith('3')) {
        return alert('Ошибка 300+');
    } else if (String(xhr.status).startsWith('4')) {
        return alert('Ошибка запроса');
    } else if (String(xhr.status).startsWith('5')) {
        return alert('Ошибка сервера');
    }
}

const onloadend1 = () => {
    if (xhr.readyState === xhr.DONE) {
        if (findErrors()) {
            return;
        }

        const xhrResponse = JSON.parse(xhr.response);
        pollTitle.textContent = xhrResponse.data.title;

        for (let elem of xhrResponse.data.answers) {
            pollAnswers.insertAdjacentHTML('beforeend', '<button class="poll__answer"></button>');
            const btnsAnswer = Array.from(document.querySelectorAll('.poll__answer'));
            btnsAnswer[btnsAnswer.length - 1].textContent = elem;

            btnsAnswer[btnsAnswer.length - 1].addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                pollAnswers.remove();
            
                let headers = {'Content-type': 'application/x-www-form-urlencoded'};
                request('POST', 'https://students.netoservices.ru/nestjs-backend/poll', `vote=${xhrResponse.id}&answer=${btnsAnswer.length - 1}`, {headers}, onloadend2);
            });
        }
    }
}

const onloadend2 = () => {
    if (xhr.readyState === xhr.DONE) {
        if (findErrors()) {
            return;
        }

        const xhrResponse = JSON.parse(xhr.response);
        let sum = 0;

        for (let elem of xhrResponse.stat) {
            sum += elem.votes;
        }
        
        for (let elem of xhrResponse.stat) {
            card.insertAdjacentHTML('beforeend', '<div class="stat"><div class="stat__answer"></div><div class="stat__votes"></div></div>');
            const answers = Array.from(document.querySelectorAll('.stat__answer'));
            const votes = Array.from(document.querySelectorAll('.stat__votes'));
            let ratio = 100 / sum;

            answers[answers.length - 1].textContent = elem.answer + ':';
            votes[votes.length - 1].textContent = (elem.votes * ratio).toFixed(2) + '%';
        }
    }
}

request('GET', 'https://students.netoservices.ru/nestjs-backend/poll', undefined, undefined, onloadend1);

function request(type, url, data, options, onloadend) {
    xhr.open(type, url);

    if (options && options.headers) {
        for (let key in options.headers) {
            xhr.setRequestHeader(key, options.headers[key]);
        }
    }

    xhr.onloadend = onloadend;

    if (type === 'GET') {
        xhr.send();
    } else {
        xhr.send(data);
    }
}