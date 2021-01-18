const wrapperDiv = document.querySelector(".wrapper");
const btn = document.querySelector(".btn");

function create() {
    const note = document.createElement("div")
    note.classList.add("div1")

    note.innerText = "Hello guys"

    wrapperDiv.appendChild(note);


}



btn.addEventListener("click", function() {
    create()
})