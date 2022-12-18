const imageTrack = document.getElementById("image-track")
const image = document.getElementsByClassName("image")

var mouseDownAt = 0;
var mouseMoveAt = 0;
var prvPercentage = 0;
var deltaMove = 0;
window.addEventListener('mousedown', e => {
    mouseDownAt = e.clientX;
})
window.addEventListener('mousemove', e => {
    if (mouseDownAt == 0) return;
    mouseMoveAt = e.clientX;
    maxMove = window.innerWidth / 2
    var mouseMoveDeltaPercent = prvPercentage + (mouseDownAt - mouseMoveAt) * 100 / maxMove;
    deltaMove = mouseMoveDeltaPercent;
    if (mouseMoveDeltaPercent > 0) mouseMoveDeltaPercent = 0;
    if (mouseMoveDeltaPercent < -100) mouseMoveDeltaPercent = -100;
    imageTrack.style.transform = `translate(${mouseMoveDeltaPercent}%, -50%)`;
    console.log("image", image)



    for (let i = 0; i < image.length; i++)
        image[i].animate({
            objectPosition: `${-mouseMoveDeltaPercent}% 50%`
        }, { duration: 5000, fill: "forwards" });
});

window.addEventListener('mouseup', e => {
    mouseDownAt = 0;
    prvPercentage = deltaMove;
});



