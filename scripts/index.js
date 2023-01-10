import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { imageModalWindow } from "./utils.js";
import { openModal, closeModal } from "./utils.js";


/** Контейнеры */
const profileFormModalWindow = document.querySelector('.popup_edit-profile');
const cardFormModalWindow = document.querySelector('.popup_add-profile');


/** Кнопки и прочие DOM узлы */
const buttonOpenFormEdit = document.querySelector('.profile__edit-button');
const buttonOpenFormAddCard = document.querySelector('.profile__add-button');
const buttonCloseFormEdit = profileFormModalWindow.querySelector('.popup__close-button');
const buttonCloseFormAddCard = cardFormModalWindow.querySelector('.popup__close-button');
const buttonCloseImageModal = document.querySelector('.popup__close-button');
const buttonAddProfileSave = cardFormModalWindow.querySelector('.popup__save-button');


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


const validationConfig  = {
  formSelector: '.popup__form', // Это объекты с селекторами формы
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};


// const buttonDisabled = validationConfig.inactiveButtonClass; 


const popupEditForm = document.querySelector('.popup_edit-profile');
const profileEditCardValidator = new FormValidator(validationConfig, popupEditForm);
profileEditCardValidator.enableValidation();

const popupAddForm = document.querySelector('.popup_add-profile');
const newAddCardProfileValidator = new FormValidator(validationConfig, popupAddForm);
newAddCardProfileValidator.enableValidation();


/*-----------------------Функции-----------------------*/


/** Обработчик «отправки» формы, хотя пока
    она никуда отправляться не будет */
function handleProfileFormSubmit (evt) {
    evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeModal(profileFormModalWindow);
}


/** Создает экземпляр Card и возвращает разметку карточки */
function createCard(data, templateSelector) {
  const card = new Card(data, templateSelector);

  return card;
}


/** Вставляет в разметку */
function renderCard(data, templateSelector) {
  const card = createCard(data, templateSelector);
  cardsContainer.prepend(card.generateCard());
}


function handleAddNewCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  renderCard({name: cardNameInputValue.value, link: cardLinkInputValue.value});
  closeModal(cardFormModalWindow);
  evt.target.reset();
}


/** Закрытие по клику на overlay */
const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((popup) => {bindOverlayClickHandler(popup); 
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


function creatEditFormContent() {
  inputName.value = title.textContent; // textContent позволяет получить или перезаписать текстовое содержимое элемента.
  inputJob.value = about.textContent;
  openModal(profileFormModalWindow);
}

/*-----------------------Обработчики события-----------------------*/


/** Прикрепляем обработчик к форме:
    он будет следить за событием “submit” - "отправка" */
profileFormModalWindow.addEventListener('submit', handleProfileFormSubmit); 
cardFormModalWindow.addEventListener('submit', handleAddNewCard);


buttonOpenEdit.addEventListener('click', () => {  // Добавить слушатель события 
  creatEditFormContent();
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