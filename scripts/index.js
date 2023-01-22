import Card from "./Card.js";
import Section from "./Section.js";
// import { initialCards, cardsContainer, newAddCardProfileValidator,
//    profileFormModalWindow, cardFormModalWindow, buttonOpenFormAddCard, buttonOpenEdit, buttonOpenFormEdit, imageModalWindow,
//    buttonCloseImageModal, buttonCloseFormEdit, buttonCloseFormAddCard, cardNameInputValue, cardLinkInputValue, inputName, 
//    inputJob, title, about, profileName, profileJob, nameInput, jobInput } from "./constants.js";
import {  openImagePopup } from "./utils.js";
import { initialCards, cardsContainer } from "./constants.js";


/** Обработчик «отправки» формы, хотя пока
    она никуда отправляться не будет */
// function handleProfileFormSubmit (evt) {
//     evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     closeModal(profileFormModalWindow);
// }

//////////////
// function createCard(data) {
//   const card = new Card(data, '#card__template', openImagePopup);
//   return card;
// }


// const renderCard = (data) => {
//   const card = createCard(data);
//   cardsContainer.prepend(card.generateCard()); 
// }


// initialCards.forEach((data) => { 
//   renderCard(data);
// });
////////////


const cardList = new Section({ 
    items: initialCards, 
    renderer: (item) => { // renderer Отвечает за создание и отрисовку данных на странице
      const card = new Card(item, '#card__template', openImagePopup);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement)
    }
  }, 
  cardsContainer // В качестве параметра containerSelector
);
cardList.renderItems();


// defaultCardButton.addEventListener('click', () => {
//   cardList.renderer(true);
// });

// function handleAddNewCard(evt) { 
//   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. 
//   renderCard({name: cardNameInputValue.value, link: cardLinkInputValue.value}); 
//   closeModal(cardFormModalWindow);
//   evt.target.reset();
// } 


/** Закрытие по клику на overlay */
// const popupList = Array.from(document.querySelectorAll('.popup'));
//   popupList.forEach((popup) => {bindOverlayClickHandler(popup); 
// });

 
// /** Вешает обработчики событий на оверлеи */
// function bindOverlayClickHandler (popup) {
//   popup.addEventListener('click', (evt) => {
//     const popupContainer = evt.currentTarget
//     // console.log(evt.target !== popupContainer) // Условие, что объектом клика является не сама форма
//     if (evt.target === popupContainer) {
//       closeModal(popup)
//     }
//   })
// };


// function openProfilePopup() {
//   inputName.value = title.textContent; // textContent позволяет получить или перезаписать текстовое содержимое элемента.
//   inputJob.value = about.textContent;
//   openModal(profileFormModalWindow);
// }


/*-----------------------Обработчики события-----------------------*/


/** Прикрепляем обработчик к форме:
//     он будет следить за событием “submit” - "отправка" */
// profileFormModalWindow.addEventListener('submit', handleProfileFormSubmit); 
// cardFormModalWindow.addEventListener('submit', handleAddNewCard);


// buttonOpenEdit.addEventListener('click', () => {  // Добавить слушатель события 
//   openProfilePopup();
// })


// /** Запускаю функции открытия и закрытия popup */
// buttonOpenFormEdit.addEventListener('click', () => {
//   openModal(profileFormModalWindow); // Запускаю функцию openModal
// });

// buttonOpenFormAddCard.addEventListener('click', () => {
//   openModal(cardFormModalWindow); // Запускаю функцию openModal
//   newAddCardProfileValidator.disableSubmitButton();
// });

// buttonCloseFormEdit.addEventListener('click', () => {
//   closeModal(profileFormModalWindow); // Запускаю функцию closeModal
// });

// buttonCloseFormAddCard.addEventListener('click', () => {
//   closeModal(cardFormModalWindow); // Запускаю функцию closeModal
// });

// buttonCloseImageModal.addEventListener('click', () => { 
//   closeModal(imageModalWindow); // Запускаю функцию closeModal 
// }); 