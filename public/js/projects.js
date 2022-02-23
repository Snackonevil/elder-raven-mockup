const projects = Array.from(document.querySelectorAll(".project"));
const projectSection = document.querySelector(".section-3");

const showButtonContainer = project => {
    const btnContainer =
        project.children[0].children[project.children[0].children.length - 1];
    btnContainer.classList.remove("hidden");
};

const openProjectState = project => {
    const overlay = project.children[1];
    project.classList.add("active-project");
    project.classList.remove("inactive-project");
    overlay.style.height = "25%";
    overlay.style.opacity = "1";
    overlay.children[0].style.width = "50%";
    overlay.children[1].classList.remove("hidden");
    console.log(overlay.children);
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
        overlay.style.height = "";
        overlay.style.opacity = "";
        btnContainer.classList.add("hidden");
        overlay.children[0].style.width = "";
        overlay.children[1].classList.add("hidden");
    });
};

// Event listener to open project states
projects.forEach(project => {
    project.addEventListener("click", e => {
        resetAllProjectStates();
        openProjectState(project);
    });
});
