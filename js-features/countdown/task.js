const timer = document.getElementById("timer");

const countDown = function() {
    timer.textContent -= 1;
    if(timer.textContent <= 0) {
        clearInterval(id);
        alert("Вы победили в конкурсе!");
    }
};

const id = setInterval(countDown, 1000);