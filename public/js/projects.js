const projects = Array.from(document.querySelectorAll(".project"));
const projectSection = document.querySelector(".section-3");

const showButtonContainer = project => {
    const btnContainer =
        project.children[0].children[project.children[0].children.length - 1];
    btnContainer.classList.remove("hidden");
};

const restyleOverlay = overlay => {
    // Restyle overlay
    overlay.style.height = "25%"; // Height of overlay
    overlay.style.opacity = "1"; // Opacity of overlay
    overlay.children[0].style.width = "50%"; // Width of Project name
    overlay.children[1].classList.remove("hidden"); // Reveal description of project
};

const openProjectState = project => {
    const overlay = project.children[1];
    // Enlarge project card
    project.classList.add("active-project");
    project.classList.remove("inactive-project");
    restyleOverlay(overlay);
    showButtonContainer(project);
};

// Reset ALL project states
const resetAllProjectStates = () => {
    projects.forEach(project => {
        const overlay = project.children[1];
        const btnContainer =
            project.children[0].children[
                project.children[0].children.length - 1
            ];
        project.classList.remove("active-project");
        project.classList.add("inactive-project");
        overlay.style.height = ""; // Reset overlay state
        overlay.style.opacity = ""; // Reset overlay state
        btnContainer.classList.add("hidden"); // Hide button container
        overlay.children[0].style.width = ""; // Restyle project name
        overlay.children[1].classList.add("hidden"); // Hide project description
    });
};

// Event listener to open project states
projects.forEach(project => {
    project.addEventListener("click", e => {
        resetAllProjectStates();
        openProjectState(project);
    });
});

const leftBtns = Array.from(document.querySelectorAll(".project-left"));
const rightBtns = Array.from(document.querySelectorAll(".project-right"));

const carouselTracks = Array.from(
    document.querySelectorAll(".project-carousel-track")
);

carouselTracks.forEach(track => {
    const slides = Array.from(track.children);
    slides.forEach((slide, index) => {
        slide.style.left = `${window.innerWidth * index}px`;
    });
});

leftBtns.forEach(leftBtn => {
    leftBtn.addEventListener("click", () => {
        const track = leftBtn.parentElement.parentElement.children[0];
        const currentSlide = track.querySelector(".current-slide");
        const slides = Array.from(track.children);

        let prevSlide;
        if (currentSlide.previousElementSibling == null) {
            prevSlide = slides[slides.length - 1];
        } else {
            prevSlide = currentSlide.previousElementSibling;
        }

        moveSlide(track, currentSlide, prevSlide);
    });
});
rightBtns.forEach(rightBtn => {
    rightBtn.addEventListener("click", () => {
        const track = rightBtn.parentElement.parentElement.children[0];
        const currentSlide = track.querySelector(".current-slide");
        const slides = Array.from(track.children);
        let nextSlide;
        if (currentSlide.nextElementSibling == null) {
            nextSlide = slides[0];
        } else {
            nextSlide = currentSlide.nextElementSibling;
        }
        moveSlide(track, currentSlide, nextSlide);
    });
});
