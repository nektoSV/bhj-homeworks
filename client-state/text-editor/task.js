const editor = document.getElementById('editor');
const clearKey = document.getElementById('clearKey');
const clearAll = document.getElementById('clearAll');

editor.addEventListener('input', saveText);
window.addEventListener('load', printTextFromLocalStorage);
clearKey.addEventListener('click', clear);
clearAll.addEventListener('click', clear);


function saveText(event) {
    localStorage.text = editor.value;
}

function printTextFromLocalStorage(event) {
    if (localStorage.text) {
        editor.value = localStorage.text;
    }
}

function clear(event) {

    event.preventDefault();

    if (event.target === clearKey) {
        localStorage.removeItem('text');
        editor.value = '';
    } else {
        localStorage.clear();
        editor.value = '';
    }
}