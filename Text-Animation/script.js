const texth1 = document.getElementById('text')
const speedEle = document.getElementById('speed')
const text = 'ajsc sajdbcjk jsabdc...';
let index = 0;
let speed = 300 / speedEle.value;

writetext();

function writetext() {
    texth1.innerHTML = text.slice(0, index)

    index++;

    if (index > text.length) {
        index = 1;
    }

    setTimeout(writetext, speed);
}

speedEle.addEventListener('input', (e) => {
    speed = (300 / e.target.value);
})