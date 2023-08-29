const reader = document.querySelector('.book');
const controls = document.querySelector('.book__control');

for (let control of controls.children) {
    control.addEventListener('click', change)
}

function change(event) {
    event.preventDefault();
    if (event.target.dataset.size === 'big') {
        reader.classList.add('book_fs-big');
        reader.classList.remove('book_fs-small');
    } else if (event.target.dataset.size === 'small') {
        reader.classList.add('book_fs-small');
        reader.classList.remove('book_fs-big');
    } else {
        reader.classList.remove('book_fs-small');
        reader.classList.remove('book_fs-big');
    }

    for (let letter of document.querySelectorAll('.font-size')) {
        letter.classList.remove('font-size_active');
    }
    event.target.classList.add('font-size_active');
    

}