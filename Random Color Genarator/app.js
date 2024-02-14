const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.append(colorContainerEl);
}
randomColor();
function randomColor() {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        colorCode +=
            chars[Math.floor(Math.random() * chars.length)];
        console.log(colorCode);

    }
    return colorCode;
}

const colorContainerEls = document.querySelectorAll(".color-container");

console.log(colorContainerEls);

generateColor();

function generateColor() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}