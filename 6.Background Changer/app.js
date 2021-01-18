const myBtn = document.getElementById("btn");



myBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = change()
})



function change() {
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}