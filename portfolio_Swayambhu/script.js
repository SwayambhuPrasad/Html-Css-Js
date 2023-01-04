const about = document.getElementById("about");
const line = document.getElementById("line");
const text = "Hi, I am Swayambhu. I have a passion for creating dynamic and user-friendly websites that are visually appealing and easy to navigate. I have a strong background in front-end and back-end development, with a focus on creating intuitive and visually appealing websites. You can reach out to me here. I have mentioned my Linkdin and Twitter handels feel free reach out there if you like."
let index = 0;
addText();
function addText() {
    about.innerHTML = text.slice(0, index);
    if (index <= 70) line.style.height = `${index}vh`
    index++;
    setTimeout(addText, 30)
}