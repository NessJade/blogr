const hamburger = document.getElementById("hamburger")
const closeMenuIcon = document.getElementById("close-menu-icon")
const header = document.querySelector("section#hero > header")
console.log({hamburger,  header});

function toggleMenu() {
    header.classList.toggle("active")

}

hamburger.addEventListener("click", toggleMenu)
closeMenuIcon.addEventListener("click", toggleMenu)


