const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', show);


function show(event) {

    const viewportHeight = window.innerHeight;

    for (let element of reveal) {

        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < viewportHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    }
}