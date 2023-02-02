import Card from "../Card.js";
import Section from "../Section.js";
import UserInfo from "../UserInfo.js";
import PopupWithForm from "../PopupWithForm.js";
import PopupWithImage from "../PopupWithImage.js";
import FormValidator from "../FormValidator.js";
import { initialCards, buttonOpenFormEdit, buttonOpenFormAddCard, buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal, 
  inputName, inputJob, validationConfig } from "../constants.js";

import './index.css';


const popupEditFormValidation = document.querySelector('.popup_edit-profile'); 
const profileEditCardValidator = new FormValidator(validationConfig, popupEditFormValidation); 
profileEditCardValidator.enableValidation(); 

 
const popupAddFormValidation = document.querySelector('.popup_add-profile'); 
const newAddCardProfileValidator = new FormValidator(validationConfig, popupAddFormValidation); 
newAddCardProfileValidator.enableValidation();


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(creatCard(item));
  },
},
  '.elements',
);
cardList.renderItems();


/* Создание карточек **/
function creatCard(item) {
  const card = new Card(item, '#card__template',
  {
    handleCardClick: (name, link) => {
      popupImageModal.open(name, link);
    },
  });
  const addCard = card.generateCard();
    
  return addCard;
};


const userInfo = new UserInfo({
  name: '.profile__name',
  job: '.profile__job',
});


const popupEditForm = new PopupWithForm('.popup_edit-profile',
  { 
    submitForm: (inputsData) => {
      userInfo.setUserInfo(inputsData)
    },
  },
);
popupEditForm.setEventListeners();


const popupAddForm = new PopupWithForm('.popup_add-profile', 
  {
    submitForm: ({title, link}) => {
      cardList.addItem(creatCard({name: title, link}), '#card__template')
    },
  }
);
popupAddForm.setEventListeners();


const popupImageModal = new PopupWithImage('.popup_type_image');
popupImageModal.setEventListeners();


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
  popupImageModal.close(); 
});