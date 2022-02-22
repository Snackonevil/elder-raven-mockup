// Main Nav
const nav = document.querySelector("#main-nav");

window.addEventListener("scroll", () => {
    window.innerHeight <= Math.floor(window.scrollY)
        ? nav.classList.remove("hidden")
        : nav.classList.add("hidden");
});

// Carousel Elements
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

// Nav Elements
const leftBtn = document.querySelector(".carousel-nav-left");
const rightBtn = document.querySelector(".carousel-nav-right");
const dots = Array.from(document.querySelectorAll(".nav-indicator"));
const navDots = document.querySelector(".carousel-nav");

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
};

// Arrange Slides
slides.forEach(setSlidePosition);

const moveSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
};

const updateDot = (currentDot, targetDot) => {
    currentDot.classList.remove("current-indicator");
    targetDot.classList.add("current-indicator");
};

// Left button action
leftBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = navDots.querySelector(".current-indicator");
    let prevSlide = currentSlide.previousElementSibling;
    prevSlide == null ? (prevSlide = slides[slides.length - 1]) : prevSlide;
    let prevDot = currentDot.previousElementSibling;
    prevDot == null ? (prevDot = dots[dots.length - 1]) : prevDot;
    moveSlide(track, currentSlide, prevSlide);
    updateDot(currentDot, prevDot);
});

// Right button action
rightBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = navDots.querySelector(".current-indicator");
    let nextSlide = currentSlide.nextElementSibling;
    nextSlide == null ? (nextSlide = slides[0]) : nextSlide;
    let nextDot = currentDot.nextElementSibling;
    nextDot == null ? (nextDot = dots[0]) : nextDot;
    moveSlide(track, currentSlide, nextSlide);
    updateDot(currentDot, nextDot);
});

dots.forEach(dot =>
    dot.addEventListener("click", e => {
        const currentSlide = track.querySelector(".current-slide");
        const currentDot = navDots.querySelector(".current-indicator");
        const targetDot = dot;
        const targetIndex = dots.indexOf(dot);
        const targetSlide = slides[targetIndex];
        moveSlide(track, currentSlide, targetSlide);
        updateDot(currentDot, targetDot);
    })
);

const projects = document.querySelectorAll(".project");
const projectSection = document.querySelector(".section-3");

projects.forEach(project => {
    project.addEventListener("click", e => {
        const projectWindow = e.currentTarget;
        const overlay = projectWindow.children[1];
        projectWindow.style.flex = "100% 1 1";
        projectWindow.style.height = "100vh";
        console.log(e.currentTarget.children[1]);
        overlay.style.height = "25%";
        overlay.style.opacity = "1";
    });
});
