document.addEventListener("DOMContentLoaded", function () {
    const makeupMenu = document.getElementById("makeup-menu");
    const megaMenu = document.getElementById("mega-menu");

    // Открытие меню при наведении
    makeupMenu.addEventListener("mouseenter", function () {
        megaMenu.style.display = "flex";
    });

    // Закрытие меню, когда уводишь курсор
    megaMenu.addEventListener("mouseleave", function () {
        megaMenu.style.display = "none";
    });

    // Если кликнуть на "Макияж", меню останется открытым
    makeupMenu.addEventListener("click", function (event) {
        event.preventDefault();
        if (megaMenu.style.display === "flex") {
            megaMenu.style.display = "none";
        } else {
            megaMenu.style.display = "flex";
        }
    });
});
