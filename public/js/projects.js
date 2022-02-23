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

const projectCarousels = Array.from(
    document.querySelectorAll(".project-carousel")
);

const projectSlides = Array.from(projectCarousels[0].children);

console.log(projectSlides);

leftBtns.forEach(leftBtn => {
    leftBtn.addEventListener("click", () =>
        console.log(leftBtn.parentElement.parentElement)
    );
});
rightBtns.forEach(rightBtn => {
    rightBtn.addEventListener("click", () => console.log("click right"));
});
