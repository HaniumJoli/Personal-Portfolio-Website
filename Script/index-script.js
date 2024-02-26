let typed = new Typed(".typed", {
    strings: ["a Web Developer", "a Programmer", "a Designer", "an Artist"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 1000,
    loop: true,
});

const elements = document.querySelectorAll("*");
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.33 }
);
elements.forEach((element) => {
    observer.observe(element);
});
showside = document.getElementById("showside");
sidebar = document.querySelector(".sidebar");
showside.addEventListener("click", () => {
    openSideBar();
});

hideside = document.getElementById("hideSide");
hideside.addEventListener("click", () => {
    closeSideBar();
});

document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !showside.contains(e.target)) {
        closeSideBar();
    }
});

function openSideBar() {
    sidebar.classList.remove("close-sidebar");
    sidebar.classList.add("open-sidebar");
    sidebar.style.display = "flex";
}

function closeSideBar() {
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.add("close-sidebar");
    setTimeout(() => {
        sidebar.style.display = "none";
    }, 500);
}
