const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const counter = document.getElementById("counter");

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.classList.add("active");
    });
});

// Show Current Image
function showImage() {
    const image = galleryItems[currentIndex].querySelector("img");

    lightboxImg.src = image.src;
    caption.textContent = image.alt;
    counter.textContent =
        `${currentIndex + 1} / ${galleryItems.length}`;
}

// Next Image
function nextImage() {
    currentIndex++;

    if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }

    showImage();
}

// Previous Image
function prevImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    }

    showImage();
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Close when clicking outside the image
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

// Keyboard Support
document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        prevImage();
    }

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }
});