document.addEventListener("DOMContentLoaded", function() {
    const makeupCategories = document.getElementById("makeup-categories");
    const toggleMakeup = document.getElementById("toggle-makeup");
    const submenuToggles = document.querySelectorAll(".submenu-toggle");

    // Открытие/закрытие категории "Макияж"
    toggleMakeup.addEventListener("click", function(event) {
        event.preventDefault();
        makeupCategories.style.display = (makeupCategories.style.display === "block") ? "none" : "block";
    });

    // Открытие/закрытие подкатегорий (Лицо, Глаза, Губы, Аксессуары)
    submenuToggles.forEach(toggle => {
        toggle.addEventListener("click", function(event) {
            event.preventDefault();
            const subMenu = this.nextElementSibling;
            if (subMenu && subMenu.classList.contains("sub-submenu")) {
                subMenu.style.display = (subMenu.style.display === "block") ? "none" : "block";
            }
        });
    });
});
