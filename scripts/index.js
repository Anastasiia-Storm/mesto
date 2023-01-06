import Card from "./Card.js";
// import FormValidator from "./FormValidator.js";


/** Контейнеры */
const profileFormModalWindow = document.querySelector('.popup_edit-profile');
const cardFormModalWindow = document.querySelector('.popup_add-profile');
export const imageModalWindow = document.querySelector('.popup_type_image');


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

const buttonAddProfileSave = cardFormModalWindow.querySelector('.popup__save-button');
// const popupElement = document.querySelector('.popup');

const validationConfig  = {
  formSelector: '.popup__form', // Это объекты с селекторами формы
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

const buttonDisabled = validationConfig.inactiveButtonClass;


// const popupEditForm = document.querySelector('.popup_edit-profile');
// const profileCardValidator = new FormValidator(validationConfig, popupEditForm);
// profileCardValidator.enableValidation();

// const popupAddForm = document.querySelector('.popup_add-profile');
// const newCardProfileValidator = new FormValidator(validationConfig, popupAddForm);
// newCardProfileValidator.enableValidation();


/*-----------------------Функции-----------------------*/


/** Обработчик «отправки» формы, хотя пока
    она никуда отправляться не будет */
function handleProfileFormSubmit (evt) {
    evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeModal(profileFormModalWindow);
}


/** Функция открытия popup */
export function openModal(modalWindow) { // Открывает модальное окно
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}


/** Функция закрытия popup */
function closeModal(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}


/** Функция открытия картинки */
// Открытие модального окна
// function handlePreview() {
//   // Контент модального окна
//     imageElement.alt = data.name;  
//     imageElement.src = data.link;          // Картинка
//     imageCaption.textContent = data.name;  // Подпись с картинке
  
//     openModal(imageModalWindow); // Открыть модальное окно
// }


/** Отрисовывает карточку через вспомогательную функцию 
    Принимает объект (name, link)
    Добавляет её в DOM */
function render(data) {
  const card = new Card(data);

  cardsContainer.prepend(card.generateCard());
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


/*-----------------------Обработчики события-----------------------*/


/** Прикрепляем обработчик к форме:
    он будет следить за событием “submit” - "отправка" */
profileFormModalWindow.addEventListener('submit', handleProfileFormSubmit); 


buttonOpenEdit.addEventListener('click', function() {  // Добавить слушатель события 
  inputName.value = title.textContent; // textContent позволяет получить или перезаписать текстовое содержимое элемента.
  inputJob.value = about.textContent;
  openModal(profileFormModalWindow);
})


/** Запускаю функции открытия и закрытия popup */
buttonOpenFormEdit.addEventListener('click', () => {
  openModal(profileFormModalWindow); // Запускаю функцию openModal
});

///
buttonOpenFormAddCard.addEventListener('click', () => {
  openModal(cardFormModalWindow); // Запускаю функцию openModal
  // disableSubmitButton(buttonAddProfileSave, buttonDisabled);
});
///

buttonCloseFormEdit.addEventListener('click', () => {
  closeModal(profileFormModalWindow); // Запускаю функцию closeModal
});

buttonCloseFormAddCard.addEventListener('click', () => {
  closeModal(cardFormModalWindow); // Запускаю функцию closeModal
});

buttonCloseImageModal.addEventListener('click', () => {
  closeModal(imageModalWindow); // Запускаю функцию closeModal
});