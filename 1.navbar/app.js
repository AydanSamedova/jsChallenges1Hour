const headNav = document.querySelector(".navbar");
const modalBtn = document.querySelector(".btn");

modalBtn.addEventListener("click", () => {
    headNav.classList.toggle("none");
});