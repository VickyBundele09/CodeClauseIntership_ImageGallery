
const buttons = document.querySelectorAll(".category-filter button");
const images = document.querySelectorAll(".image-container img");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const category = e.target.getAttribute("data-category");

        images.forEach(image => {
            const imageCategory = image.getAttribute("data-category");
            if (category === "all" || category === imageCategory) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    });
});

// Image click to view full image
let viewImage = document.querySelector(".view-image");
let fullImage = document.querySelector(".view-image img");
let closeBtn = document.querySelector(".view-image span");

images.forEach(image => {
    image.addEventListener("click", function (e) {
        viewImage.style.display = "flex";
        fullImage.src = e.target.src;
    });
});

closeBtn.addEventListener('click', function () {
    viewImage.style.display = "none";
});