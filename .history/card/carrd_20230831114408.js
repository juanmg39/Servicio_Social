const original = document.querySelector(".original");
let maxScrollLeft = original.scrollWidth - original.clientWidth;
let intervalo = null;
let step = 1
const start = () => {
    intervalo = setInterval(function () {
        original.scrollLeft = original.scrollLeft + step;
        if (original.scrollLeft === maxScrollLeft) {
            step = step * -1
        } else if (original.scrollLeft === 0){
            step = step * -1;
        }

    }, 10)
    };

const stop = () => {
    clearInterval(intervalo);
};


start();