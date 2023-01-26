import Card from "./../components/Card.js";
import Section from "./../components/Section.js";
import Popup from "./../components/Popup.js";
import UserInfo from "./../components/UserInfo.js";
import PopupWithForm from "./../components/PopupWithForm.js";
import PopupWithImage from "./../components/PopupWithImage.js";
// import {  openImagePopup } from "./utils.js";
// import { buttonOpenEdit } from "./constants.js";
import { initialCards, cardListSelector, buttonSubmitSelector, buttonOpenFormEdit, buttonOpenFormAddCard, newAddCardProfileValidator, 
  buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal, profileName, profileJob, inputName, inputJob } from "../utils/constants.js";
// import PopupWithForm from "./PopupWithForm.js";
// (imageModalWindow, profileFormModalWindow, profileName, profileJob )


const cardList = new Section({ 
    items: initialCards, 
    renderer: (item) => { // renderer Отвечает за создание и отрисовку данных на странице. На место параметра Item попадает аргумент item, который мы передаем при вызове renderer
      const card = new Card(item, '#card__template');
      const cardElement = card.generateCard();
      cardList.addItem(cardElement) // Вставим разметку на страницу,
    }
  }, 
  cardListSelector // В качестве параметра containerSelector
);
cardList.renderItems();
console.log(cardList);


const popup = new Popup('.popup__input');
console.log(popup);


const userInfo = new UserInfo({ 
  name: profileName, 
  description: profileJob
});
console.log(userInfo);


const popupEditForm = new PopupWithForm('.popup_edit-profile',
  { submitForm: ({ name, description }) => {
    userInfo.setUserInfo(name, description)
  },
});
console.log(popupEditForm)
popupEditForm.setEventListeners();
// console.log(popupEditForm.name);


/* Открывает попап с картинкой при клике на карточку **/
// handleCardClick() {

// // };
const popupAddForm = new PopupWithForm('.popup_add-profile', {
  submitForm: ({ profileName, profileJob }) => {
    cardList.addItem(profileName, profileJob);
  }
});
  console.log(popupAddForm);



// const imageModal = new PopupWithImage({
//    name: name,
//    link: link
// })
// console.log(imageModal);


/* Позволяет получить или перезаписать текстовое содержимое элемента **/
buttonOpenFormEdit.addEventListener('click', () => {
  popupEditForm.open();
  const inputValue = userInfo.getUserInfo();
  inputName.value = inputValue.name; 
  inputJob.value = inputValue.description;
});

buttonOpenFormAddCard.addEventListener('click', () => {
  popupAddForm.open(); 
  newAddCardProfileValidator.disableSubmitButton();
});

buttonCloseFormEdit.addEventListener('click', () => {
  popupEditForm.close(); 
});

buttonCloseFormAddCard.addEventListener('click', () => {
  popupAddForm.close(); 
});

buttonCloseImageModal.addEventListener('click', () => { 
  popup.close(); 
}); 







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