const projects = Array.from(document.querySelectorAll(".project"));
const projectSection = document.querySelector(".section-3");

const openProjectState = project => {
    const overlay = project.children[1];
    project.classList.add("active-project");
    project.classList.remove("inactive-project");
    overlay.style.height = "25%";
    overlay.style.opacity = "1";
    const btnContainer =
        project.children[0].children[project.children[0].children.length - 1];
    btnContainer.classList.remove("hidden");
};

const closeProjectState = () => {
    // reset ALL project states
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
    });
};

projects.forEach(project => {
    project.addEventListener("click", e => {
        closeProjectState();
        openProjectState(project);

        const projectCarousel = project.children[0];
        const overlay = project.children[1];
        const btnContainer =
            project.children[0].children[
                project.children[0].children.length - 1
            ];
        console.log(btnContainer);
    });
});
