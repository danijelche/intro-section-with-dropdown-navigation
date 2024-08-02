const openMenu = document.querySelector(".open-menu-btn");
const closeMenu = document.querySelector(".close-menu-btn");
const navMenu = document.querySelector(".header-nav");
const subMenuBtn = document.querySelectorAll(".submenu-btn");

subMenuBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const submenuContent = btn.nextElementSibling;
        const submenuArrow = btn.querySelector(".submenu-arrow");
		
        submenuContent.classList.toggle("show");
        submenuArrow.classList.toggle("show");
    });
});



openMenu.addEventListener("click", () => {
    navMenu.classList.add("show");
	
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show");
	
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
});


