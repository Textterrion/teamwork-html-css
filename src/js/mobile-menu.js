(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-menu]"),
    // Отримуємо всі посилання у модальному вікні
    menuLinks: document.querySelectorAll('[data-menu] a[href^="#"]'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Додаємо обробник кліку для кожного посилання
  refs.menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      refs.modal.classList.remove("is-open"); // Закриваємо модальне вікно
    });
  });

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();