document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', addWish);

  const wishList = document.getElementById('wishList');
  const localStorageKey = 'wishes';

  // Отримання даних з локального сховища при завантаженні сторінки
  const savedWishes = JSON.parse(localStorage.getItem(localStorageKey)) || [];

  // Заповнення списку бажань
  savedWishes.forEach(function (wish) {
    renderWish(wish);
  });

  function addWish() {
    const input = document.getElementById('wishInput');

    if (input.value.trim() !== '') {
      const newWish = { text: input.value, id: Date.now() };
      renderWish(newWish);

      // Оновлення даних у локальному сховищі
      const existingWishes = JSON.parse(localStorage.getItem(localStorageKey)) || [];
      const updatedWishes = [...existingWishes, newWish];
      localStorage.setItem(localStorageKey, JSON.stringify(updatedWishes));

      input.value = '';
    }
  }

  function renderWish(wish) {
    const li = document.createElement('li');
    li.innerHTML = `${wish.text} <button class="removeButton">Видалити</button>`;
    wishList.appendChild(li);

    // Додаємо обробник події для видалення бажання
    const removeButton = li.querySelector('.removeButton');
    removeButton.addEventListener('click', function () {
      wishList.removeChild(li);

      // Оновлення даних у локальному сховищі
      const existingWishes = JSON.parse(localStorage.getItem(localStorageKey)) || [];
      const updatedWishes = existingWishes.filter(existingWish => existingWish.id !== wish.id);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedWishes));
    });
  }
});
