document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.subcategories li');

    categories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            const subSubcategories = category.querySelector('.sub-subcategories');
            if (subSubcategories) {
                subSubcategories.style.left = `${category.offsetLeft + category.offsetWidth}px`;
                subSubcategories.style.top = `${category.offsetTop}px`;
            }
        });
    });
});
