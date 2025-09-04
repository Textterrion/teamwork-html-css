(() => {
  const refs = {
    //Додати атрибут data-modal-form на форму
    form: document.querySelector("[data-modal-form]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelectorAll("[data-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modalWindow: document.querySelector("[data-modal]"),
  };

  refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
    toggleModal((open = true));
    refs.form.reset(); // Скидаємо форму після відправки
  });
  refs.closeModalBtn.forEach((btn) =>
    btn.addEventListener("click", toggleModal)
  );

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modalWindow.classList.toggle("subscription-open");
  }
})();
