const interests = document.querySelectorAll('.interest__check');

for (let interest of interests) {

    interest.addEventListener('change', (event) => {


        if (interest.closest('.interests').previousElementSibling !== null) {

            const parentCheckbox = interest.closest('.interests').previousElementSibling.querySelector('.interest__check') || null;
            let count = 0;
            const list = event.target.closest('.interests').querySelectorAll('.interest__check');

            for (let input of list) {
                if (input.checked) {
                    count++;
                }
            }

            parentCheckbox.checked = count === list.length;

        } else {

            const childrenCheckboxes = event.target.parentElement.nextElementSibling.querySelectorAll('.interest__check');

            if (event.target.checked) {
                for (let checkbox of childrenCheckboxes) {
                    checkbox.checked = true;
                }
            } else {
                for (let checkbox of childrenCheckboxes) {
                    checkbox.checked = false;
                }
            }
        }

    });
}