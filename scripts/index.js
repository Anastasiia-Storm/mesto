/** Темплейты */
const cardTemplate = document.querySelector('#card__template')
.content.querySelector('.element'); // Нахожу template элемент и беру контент карточки <li></li>


/** Контейнеры */
const profileFormModalWindow = document.querySelector('.popup_edit-profile');
const cardFormModalWindow = document.querySelector('.popup_add-profile');
const imageModalWindow = document.querySelector('.popup_type_image');


/** Кнопки и прочие DOM узлы */
const buttonOpenFormEdit = document.querySelector('.profile__edit-button');
const buttonOpenFormAddCard = document.querySelector('.profile__add-button');
const buttonCloseFormEdit = profileFormModalWindow.querySelector('.popup__close-button');
const buttonCloseFormAddCard = cardFormModalWindow.querySelector('.popup__close-button');
const buttonCloseImageModal = imageModalWindow.querySelector('.popup__close-button');


/** DOM узлы профиля
    Получаю значение полей jobInput и nameInput из свойства value */
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


/** Данные форм и элементы форм */
const cardNameInputValue = cardFormModalWindow.querySelector('.popup__input_type_card-name');
const cardLinkInputValue = cardFormModalWindow.querySelector('.popup__input_type_url');
const imageElement = imageModalWindow.querySelector('.popup__photo');
const imageCaption = imageModalWindow.querySelector('.popup__caption');


/** Элемент списка */
const cardsContainer = document.querySelector('.elements'); 

/** Находим поля формы в DOM */
const nameInput = document.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()
const buttonOpenEdit = document.querySelector('.profile__edit-button');

const title = document.querySelector('.profile__name');
const about = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');


/** Обработчик «отправки» формы, хотя пока
    она никуда отправляться не будет */
function handleProfileFormSubmit (evt) {
    evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeModal(profileFormModalWindow);
}


/** Прикрепляем обработчик к форме:
    он будет следить за событием “submit” - "отправка" */
profileFormModalWindow.addEventListener('submit', handleProfileFormSubmit); 


buttonOpenEdit.addEventListener('click', function() {  // Добавить слушатель события 
  inputName.value = title.textContent; // textContent позволяет получить или перезаписать текстовое содержимое элемента.
  inputJob.value = about.textContent;
  openModal(profileFormModalWindow);
})


/** Функция открытия popup */
function openModal(modalWindow) { // Открывает модальное окно
  // console.log(modalWindow);  // Навешивает класс
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}


/** Функция закрытия popup */
function closeModal(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}


/** Запускаю функции открытия и закрытия popup */
buttonOpenFormEdit.addEventListener('click', () => {
  openModal(profileFormModalWindow); // Запускаю функцию openModal
});

buttonOpenFormAddCard.addEventListener('click', () => {
  openModal(cardFormModalWindow); // Запускаю функцию openModal
});

buttonCloseFormEdit.addEventListener('click', () => {
  closeModal(profileFormModalWindow); // Запускаю функцию closeModal
});

buttonCloseFormAddCard.addEventListener('click', () => {
  closeModal(cardFormModalWindow); // Запускаю функцию closeModal
});

buttonCloseImageModal.addEventListener('click', () => {
  closeModal(imageModalWindow); // Запускаю функцию closeModal
});


/** Лайк */
function handleLikeButton(evt) {
  evt.target.classList.toggle('element__like_active');
}


/** Удаление */
function handDeleteButton(evt) {
  evt.target.closest('.element').remove('card');
}


/** Функция открытия картинки */
function handlePreview(data) {
// Контент модального окна
  imageElement.alt = data.name;  
  imageElement.src = data.link;          // Картинка
  imageCaption.textContent = data.name;  // Подпись с картинке

  openModal(imageModalWindow); // Открыть модальное окно
}


//** Внутри этой функции я вешаю слушателей на карточку createCard */
function setEventListeners(card, data, cardImage) {
  const buttonLike = card.querySelector('.element__like');
  buttonLike.addEventListener('click', handleLikeButton);

  const buttonDelete = card.querySelector('.element__delete');
  buttonDelete.addEventListener('click', handDeleteButton);

  cardImage.addEventListener('click', () => {
    handlePreview(data);
  });
}


initialCards.forEach(render); // forEach перебирает массив и выполняет для каждого элемента свой код.
// Метод forEach нужен, когда мы хотим просто пройтись по массиву и для каждого элемента что-то сделать.
// В данном случае с помощью forEach начинаем применять функцию createCard


/** Создает и возвращает карточку */
function createCard(data) { // name, link
  const cardElement = cardTemplate.cloneNode(true); // Клонирую <li></li>
  const cardImage = cardElement.querySelector('.element__photo'); // Ищу и добавляю картинку
  cardImage.alt = data.name;
  cardImage.src = data.link; // Взяла img и добавила ссылку
  cardElement.querySelector('.element__name').textContent = data.name; // Взяла title и добавила текст

  setEventListeners(cardElement, data, cardImage);

  return cardElement; // Возвращаю карточку
}


/** Отрисовывает карточку через вспомогательную функцию 
    Принимает объект (name, link)
    Добавляет её в DOM */
function render(data) {
 const cardNew = createCard(data); // Это будет новая карточка

 cardsContainer.prepend(cardNew);
}


function handleAddNewCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  render({name: cardNameInputValue.value, link: cardLinkInputValue.value});
  closeModal(cardFormModalWindow);
}

cardFormModalWindow.addEventListener('submit', handleAddNewCard);


/** Функция закрытия form по нажатию esc */
function closeByEsc(event) {
  if (event.key === 'Escape') {
    const popupToClose = document.querySelector('.popup_opened');
    closeModal(popupToClose);
  }
}


/** Создает добавление карточки по нажатию enter на поле title */
cardNameInputValue.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
  createCard(cardNameInputValue.value, cardLinkInputValue.value); // Передаю функции нужные аргументы
  }
});


/** Создает добавление карточки по нажатию enter на поле link */
cardLinkInputValue.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
  createCard(cardNameInputValue.value, cardLinkInputValue.value);
  }
});


/** Закрытие по клику на overlay */
const cardList = Array.from(document.querySelectorAll('.popup'));
cardList.forEach((popup) => {bindOverlayClickHandler(popup); 
});

 
/** Вешает обработчики событий на оверлеи */
function bindOverlayClickHandler (popup) {
  popup.addEventListener('click', (evt) => {
    const popupContainer = evt.currentTarget
    // console.log(evt.target !== popupContainer) // Условие, что объектом клика является не сама форма
    if (evt.target === popupContainer) {
      closeModal(popup)
    }
  })
};