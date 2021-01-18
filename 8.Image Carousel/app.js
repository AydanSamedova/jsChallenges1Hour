// const myBtn = document.querySelector(".btn");
const myImg = document.getElementById("images");

const img = document.querySelectorAll("#images img");

let index = 0;

function next() {
    index++;

    if (index > img.length - 1) {
        index = 0;
    }
    myImg.style.transform = `translateX(${-index * 500}px)`;

}

setInterval(next, 1000)