let cats = document.querySelectorAll(".cats li");
let imgs = Array.from(document.images);
let act = document.querySelector(".active");

cats.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// remove active class from all lis and add to current

function removeActive() {
    cats.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

// manage tags

function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block"
    });
};

function toggleText() {
    let dots = document.getElementById("dots");

    let moreText = document.getElementById("hid");

    let showBtn = document.getElementById("showBtn");

    if (dots.style.display === "none") {

        moreText.style.display = "none";

        dots.style.display = "inline";

        showBtn.innerHTML = "Show more";

    } else {

        moreText.style.display = "inline";

        dots.style.display = "none";

        showBtn.innerHTML = "Show less";
    }
}




