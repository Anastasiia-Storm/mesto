import Card from "./../components/Card.js";
import Section from "./../components/Section.js";
import Popup from "./../components/Popup.js";
import UserInfo from "./../components/UserInfo.js";
import PopupWithForm from "./../components/PopupWithForm.js";
import PopupWithImage from "./../components/PopupWithImage.js";
// import {  openImagePopup } from "./utils.js";
// import { buttonOpenEdit } from "./constants.js";
import { initialCards, cardsContainer, buttonOpenFormEdit, buttonOpenFormAddCard, newAddCardProfileValidator, 
  buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal, profileName, profileJob } from "../utils/constants.js";
// import PopupWithForm from "./PopupWithForm.js";
// (imageModalWindow, profileFormModalWindow, profileName, profileJob )


    
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
console.log(cardList);


const popup = new Popup('.popup');
console.log(popup);


const userInfo = new UserInfo({ 
  name: profileName, 
  description: profileJob 
});
console.log(userInfo);


// const imageModal = new PopupWithImage({
//    name: name,
//    link: link
// })
// console.log(imageModal);

const popupEditForm = new PopupWithForm('.popup_edit-profile', {
  submitForm: ({ name, description }) => {
    userInfo.setUserInfo(name, description);
  },
});
popupEditForm.setEventListeners();
console.log(popupEditForm);


/* Открывает попап с картинкой при клике на карточку **/
// handleCardClick() {

// };
const popupAddForm = new PopupWithForm('.popup_add-profile', {
  submitForm: ({ profileName, profileJob }) => {
    cardList.addItem(profileName, profileJob);
  }
});
console.log(popupAddForm);

// popupEditForm.setEventListeners();
// const formEdit = new PopupWithForm({
//   this._submitForm: (formData)
// })

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
// // })


/** Закрытие по клику на overlay */ 

// const popupList = Array.from(document.querySelectorAll('.popup')); 
//   popupList.forEach((popup) => {bindOverlayClickHandler(popup);  
// }); 




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


// function insertTweet(initialCards, containerSelector) {
//   const tweetContainer = document.querySelector(containerSelector);
//   // tweetContainer.textContent = initialCards;

//   // Проверим, что с контейнером твитов всё в порядке
//   if (!tweetContainer) {
//       console.log('Контейнер для твитов не найден');

//   /* прекратим выполнение функции,
//   чтобы дальнейший код не вызвал ошибку */
//   return;
//   }

//   tweetContainer.textContent = initialCards;
// }
// insertTweet(cardsContainer);