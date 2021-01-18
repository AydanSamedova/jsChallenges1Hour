const textim = document.querySelector("#btn");



function create() {
    const heart = document.createElement("div");
    heart.classList.add("heart");


    heart.style.left = Math.random() * 100 + "vw"

    heart.style.animationDuration = Math.random() * 2 + 3 + "s"

    heart.innerText = `hello guys`
        // console.log(heart)

    document.body.appendChild(heart)
}


setInterval(create, 200);