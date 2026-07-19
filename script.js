function showmessage(){alert ("Rafi vai");}

function abdullah(){ alert ("Love ohona");}

const img = document.querySelector("img");

img.addEventListener("mousemove", function () {
    const x = Math.random() * (window.innerWidth - img.offsetWidth);
    const y = Math.random() * (window.innerHeight - img.offsetHeight);

    img.style.position = "absolute";
    img.style.left = x + "px";
    img.style.top = y + "px";
});