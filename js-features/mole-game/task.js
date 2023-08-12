let dead = document.getElementById("dead");
let lost = document.getElementById("lost");


for(let index = 1; index <= 9; index += 1) {
    function getHole(index) {
        let holeclick = document.getElementById(`hole${index}`);
        return holeclick;
    }

    let hole = getHole(index);

    hole.onclick = function() {
        if(hole.className.includes("hole_has-mole") === true) {
            dead.textContent += 1;
        } else {
            lost.textContent += 1;
        }

        if(dead.textContent === 10) {
            alert ("Вы победили!");
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent === 5) {
            alert ("Вы проиграли!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}