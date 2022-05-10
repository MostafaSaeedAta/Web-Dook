// toggle the sidebar active class
let sidebarItems = document.querySelector(".the-navbar .list-group");
let sidebarSpan = document.querySelector(".the-navbar .toggeler span");

sidebarSpan.addEventListener("click", () => {
    sidebarItems.classList.toggle("active");
    document.querySelector(".toggeler .overlay").classList.toggle("active");
});
document.querySelector(".btn-close").addEventListener("click", () => {
    sidebarItems.classList.remove("active");
    document.querySelector(".toggeler .overlay").classList.remove("active");
});

// add active class to nav list icons
let navItem = document.querySelectorAll(".nav-link");
function activeLink() {
    navItem.forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
    });
}
navItem.forEach((item) => item.addEventListener("click", activeLink));
