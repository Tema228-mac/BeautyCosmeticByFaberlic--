document.addEventListener('DOMContentLoaded', () => {
    const categoriesList = document.querySelector('#categories');
    const subCategoriesSection = document.querySelector('#sub-categories');
    const searchIcon = document.querySelector('#search-icon');
    const searchForm = document.querySelector('#search-form');
    const searchInput = document.querySelector('#search-input');
    const searchResults = document.querySelector('#search-results');
    const cartItems = document.querySelector('#cart-items');
    const clearCartBtn = document.querySelector('#clear-cart');

    let cart = [];

    // Функция для показа подкатегорий
    function showSubCategories(category) {
        subCategoriesSection.innerHTML = '';
        subCategoriesSection.style.display = 'none';

        switch (category) {
            case 'Уход':
                createSubCategoryList(['Лицо', 'Тело', 'Волосы']);
                break;
            default:
                console.log(`Подкатегории для "${category}" отсутствуют.`);
        }

        subCategoriesSection.style.display = 'flex';
    }

    // Функция для создания списка подкатегорий
    function createSubCategoryList(items) {
        const ul = document.createElement('ul');

        items.forEach(item => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = item;
            link.href = '#';
            li.appendChild(link);
            ul.appendChild(li);
        });

        subCategoriesSection.appendChild(ul);
    }

    // Показать форму поиска при клике на иконку
    searchIcon.addEventListener('click', () => {
        searchForm.style.display = searchForm.style.display === 'none' ? 'block' : 'none';
    });

    // Обработчик события поиска
    searchForm.addEventListener('submit', e => {
        e.preventDefault();

        const query = searchInput.value.trim().toLowerCase();

        if (!query) {
            alert('Пожалуйста, введите название продукта.');
            return;
        }

        searchResults.innerHTML = '<p>Идет поиск...</p>';

        // Здесь можно добавить AJAX-запрос для получения результатов поиска
        setTimeout(() => {
            searchResults.innerHTML = `
                <ul>
                    <li>Результат 1</li>
                    <li>Результат 2</li>
                    <li>Результат 3</li>
                </ul>
            `;
        }, 1000); // Имитация задержки
    });

    // Обработка добавления товаров в корзину
    cartItems.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            const itemId = parseInt(e.target.dataset.itemid);
            if (!isNaN(itemId)) {
                cart.push(itemId);
                updateCart();
            }
        }
    });

    // Обновление содержимого корзины
    function updateCart() {
        cartItems.innerHTML = '';

        if (cart.length > 0) {
            const ul = document.createElement('ul');

            cart.forEach(id => {
                const li = document.createElement('li');
                li.textContent = `Товар ${id}`;
                const btn = document.createElement('button');
                btn.textContent = 'Удалить';
                btn.setAttribute('data-itemid', id);
                li.appendChild(btn);
                ul.appendChild(li);
            });

            cartItems.appendChild(ul);
        } else {
            cartItems.textContent = 'Корзина пуста.';
        }
    }

    // Обработчик очистки корзины
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        updateCart();
    });
});
