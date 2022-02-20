//Main Navbar

// Carousel Elements
const carouselContainer = document.querySelector("carousel-container");
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

// Nav Elements
const leftBtn = document.querySelector(".carousel-nav-left");
const rightBtn = document.querySelector(".carousel-nav-right");
const navDots = Array.from(document.querySelectorAll(".nav-indicator"));

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
};
// Arrange Slides
slides.forEach(setSlidePosition);

rightBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    console.log(currentSlide);
});
