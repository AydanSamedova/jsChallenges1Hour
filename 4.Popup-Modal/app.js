const btn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const conta = document.querySelector(".container");


btn.addEventListener("click", function() {
    // console.log("ghbn")
    conta.classList.add("none")

})

closeBtn.addEventListener("click", function() {
    conta.classList.remove("none")

})