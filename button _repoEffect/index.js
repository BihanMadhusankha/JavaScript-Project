const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseenter", (event) => {
   const x = console.log(event.pageX - btnEl.offsetLeft);
   const y = console.log(event.pageY - btnEl.offsetTop);

   btnEl.style.setProperty("--xPos", x + "px");
   btnEl.style.setProperty("--yPos", y + "px");

});