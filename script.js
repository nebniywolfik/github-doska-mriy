document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', addWish);

  function addWish() {
    const input = document.getElementById('wishInput');
    const wishList = document.getElementById('wishList');

    if (input.value.trim() !== '') {
      const li = document.createElement('li');
      li.innerHTML = `${input.value} <button class="removeButton">Видалити</button>`;
      wishList.appendChild(li);
      input.value = '';

      // Додаємо обробник події для видалення бажання
      const removeButton = li.querySelector('.removeButton');
      removeButton.addEventListener('click', function () {
        wishList.removeChild(li);
      });
    }
  }
  var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
});
