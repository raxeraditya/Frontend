let elems = document.querySelectorAll(".elem");
let elemContainer = document.querySelector(".elem-box");
let fixedbox = document.querySelector(".fixed");

elemContainer.addEventListener("mouseenter", () => {
    fixedbox.style.display = "block";
});

elemContainer.addEventListener("mouseleave", () => {
    fixedbox.style.display = "none";
});
elems.forEach((e) => {
    let photo = e.getAttribute("data-image");
    e.addEventListener("mouseenter", () => {
        fixedbox.style.backgroundImage = `url(${photo})`;
    });
});
