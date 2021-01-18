const music = [
    'au',
    'ye'
];


music.forEach((item) => {
    const btn = document.createElement("button")
    btn.innerText = item;

    btn.addEventListener("click", function() {
        document.getElementById(item).play()
    });

    document.body.appendChild(btn);
});