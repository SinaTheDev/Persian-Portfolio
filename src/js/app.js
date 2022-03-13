// Burger Menu in under sm screen size

// Declare vars
burgerMenu = document.getElementById("burger-menu");
menuBtn = document.getElementById("menu-btn");


// Function to open menu
function openmenu() {
    burgerMenu.classList.toggle("show");
}
// Event
menuBtn.addEventListener("click", openmenu);


