import Card from "./../components/Card.js";
import Section from "./../components/Section.js";
import Popup from "./../components/Popup.js";
import UserInfo from "./../components/UserInfo.js";
import PopupWithForm from "./../components/PopupWithForm.js";
import PopupWithImage from "./../components/PopupWithImage.js";
// import {  openImagePopup } from "./utils.js";
// import { buttonOpenEdit } from "./constants.js";
import { initialCards, cardListSelector, buttonOpenFormEdit, buttonOpenFormAddCard, newAddCardProfileValidator, 
  buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal, profileName, profileJob, 
  inputName, inputJob, cardImage, cardTitle, imageModalWindow, imageElement, imageCaption } from "../utils/constants.js";


// const cardList = new Section({ 
//     items: initialCards, 
//     renderer: (item) => { // renderer Отвечает за создание и отрисовку данных на странице. На место параметра Item попадает аргумент item, который мы передаем при вызове renderer
//       const card = new Card(item, '#card__template', imageModalWindow,
//       {
//         handleCardClick: (item) => {
//           const popupImageModal = new PopupWithImage(imageModalWindow) ;
//           popupImageModal.openCardImage(item);
//         },
//       }
//       );
//       const cardElement = card.generateCard();
//       cardList.addItem(cardElement) // Вставим разметку на страницу,
//     }
//   }, 
//   cardListSelector // В качестве параметра containerSelector
// );
// cardList.renderItems();

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(creatCard(item, '#card__template'))
  },
},
cardListSelector // В качестве параметра containerSelector
);
cardList.renderItems();


function creatCard(item, templateSelector) {
  const card = new Card(item, templateSelector);
  const addCard = card.generateCard();
    
  return addCard;
}


function creatModalWindow(name, link, templateSelector) {
  return creatCard({ name, link }, templateSelector)
}
// const popup = new Popup('.popup');
// console.log(popup);
// popup.setEventListeners();


const userInfo = new UserInfo({ 
  name: profileName,
  job: profileJob,
});
console.log(userInfo);


const popupEditForm = new PopupWithForm('.popup_edit-profile',
  { submitForm: ({ name, job }) => {
    userInfo.setUserInfo({ name, job })
  },
});
console.log(popupEditForm)
popupEditForm.setEventListeners();


const popupAddForm = new PopupWithForm('.popup_add-profile', {
  submitForm: ({ name, link }) => {
    cardList.addItem(creatModalWindow(name, link, '#card__template'));
  }
});
  console.log(popupAddForm);
popupAddForm.setEventListeners();



/* Позволяет получить или перезаписать текстовое содержимое элемента **/
buttonOpenFormEdit.addEventListener('click', () => {
  popupEditForm.open();
  const inputValue = userInfo.getUserInfo();
  inputName.value = inputValue.name; 
  inputJob.value = inputValue.job;
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
  popupModalWindow.close(); 
});