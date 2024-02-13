const navbarEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbarEl.classList.add("active");
    } else {
        navbarEl.classList.remove("active");
    }
})