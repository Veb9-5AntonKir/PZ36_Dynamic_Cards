"use strict";

const form = document.querySelector("#card-form");
const input = document.querySelector("#card-input");
const list = document.querySelector("#card-list");
const status = document.querySelector("#card-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (title === "") {
    status.textContent = "Введите название карточки.";
    return;
  }

  // Задание 1. Создание элемента li с классом и атрибутом
  const card = document.createElement("li");
  card.classList.add("item-card");
  card.dataset.card = "";

  // Задание 2. Создание span и кнопки удаления
  const cardTitle = document.createElement("span");
  cardTitle.classList.add("item-title");
  cardTitle.textContent = title;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-card");
  removeButton.type = "button";
  removeButton.setAttribute("aria-label", "Удалить карточку");
  removeButton.textContent = "✕";

  card.append(cardTitle, removeButton);
  list.append(card);

  input.value = "";
  status.textContent = `Карточка «${title}» добавлена.`;
});

// Задания 3 и 4. Делегирование событий на общем списке
list.addEventListener("click", (event) => {
  // Задание 3. Удаление карточки
  const removeBtn = event.target.closest(".remove-card");
  if (removeBtn) {
    const cardToRemove = removeBtn.closest(".item-card");
    if (cardToRemove) {
      cardToRemove.remove();
      status.textContent = "Карточка удалена.";
    }
    return;
  }

  // Задание 4. Переключение активного состояния карточки
  const clickedCard = event.target.closest(".item-card");
  if (clickedCard) {
    clickedCard.classList.toggle("is-active");
  }
});
