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
