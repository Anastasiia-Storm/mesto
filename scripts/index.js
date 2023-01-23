import Card from "./Card.js";
import Section from "./Section.js";
// import Popup from "./Popup.js";
import { popup } from "./constants.js";
// import {  openImagePopup } from "./utils.js";
// import { buttonOpenEdit } from "./constants.js";
import { initialCards, cardsContainer, buttonOpenFormEdit, buttonOpenFormAddCard, newAddCardProfileValidator, 
  buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal } from "./constants.js";


/** Обработчик «отправки» формы, хотя пока
    она никуда отправляться не будет */
// function handleProfileFormSubmit (evt) {
//     evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     closeModal(profileFormModalWindow);
// }



const cardList = new Section({ 
    items: initialCards, 
    renderer: (item) => { // renderer Отвечает за создание и отрисовку данных на странице
      const card = new Card(item, '#card__template');
      const cardElement = card.generateCard();
      cardList.addItem(cardElement)
    }
  }, 
  cardsContainer // В качестве параметра containerSelector
);
cardList.renderItems();


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


// const popup = new Popup(popupContainer);
// console.log(popup);

/** Прикрепляем обработчик к форме:
//     он будет следить за событием “submit” - "отправка" */
// profileFormModalWindow.addEventListener('submit', handleProfileFormSubmit); 
// cardFormModalWindow.addEventListener('submit', handleAddNewCard);


// buttonOpenEdit.addEventListener('click', () => {  // Добавить слушатель события 
//   openProfilePopup();
// // })

/** Запускаю функции открытия и закрытия popup */
buttonOpenFormEdit.addEventListener('click', () => {
   popup.open();
});

buttonOpenFormAddCard.addEventListener('click', () => {
  popup.open(); 
  newAddCardProfileValidator.disableSubmitButton();
});

buttonCloseFormEdit.addEventListener('click', () => {
  popup.close(); 
});

buttonCloseFormAddCard.addEventListener('click', () => {
  popup.close(); 
});

buttonCloseImageModal.addEventListener('click', () => { 
  popup.close(); 
}); 