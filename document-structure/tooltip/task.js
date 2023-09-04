const links = document.querySelectorAll('.has-tooltip');
const hint = document.querySelector('.tooltip');

for (let link of links) {
    link.addEventListener('click', showHint);
}

hint.addEventListener('click', () => hint.classList.remove('tooltip_active'));

function showHint(event) {

    event.preventDefault();

    const tooltip = document.querySelector('.tooltip_active');

    if (tooltip) {
        tooltip.classList.remove('tooltip_active');
    }

    hint.classList.add('tooltip_active');
    hint.innerText = event.target.title;
    hint.style.top = event.target.getBoundingClientRect().top + 20 + 'px';
    hint.style.left = event.target.getBoundingClientRect().left + 'px';
}