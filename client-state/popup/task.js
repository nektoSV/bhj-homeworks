const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

modalClose.onclick = () => {
    modal.classList.remove('modal_active');
    setCookie('status', 'close', 31.6224e+8);
}

function setCookie(name, value, time) {
    let date = new Date(Date.now() + time);
    date = date.toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + date;
}

function getCookie(name) {
    if (document.cookie) {
        const cookiePairs = document.cookie.split('; ');
        const requiredCookie = cookiePairs.find(p => p.startsWith(name + '='));
        
        if (requiredCookie.substring(name.length + 1) !== 'close') {
            modal.classList.add('modal_active');
        }
    } else {
        modal.classList.add('modal_active');
    }
}

getCookie('status');