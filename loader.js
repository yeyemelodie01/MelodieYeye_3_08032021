window.addEventListener("load", function(event) {
    let loader = document.getElementById("loader");
    fadeOutIn(loader, 3000);
});

function fadeOutIn(elem, speed) {
    if (!elem.style.opacity) {
        elem.style.opacity = 1;
    }

    let outInterval = setInterval(function() {
        elem.style.opacity -= 0.02;
        if (elem.style.opacity <= 0) {
            clearInterval(outInterval);
            let content = document.getElementById("content");
            content.removeAttribute('class');
        }
    }, speed/50 );
}
