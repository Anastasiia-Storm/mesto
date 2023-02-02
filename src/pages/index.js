import Card from "../Card.js";
import Section from "../Section.js";
import UserInfo from "../UserInfo.js";
import PopupWithForm from "../PopupWithForm.js";
import PopupWithImage from "../PopupWithImage.js";
import FormValidator from "../FormValidator.js";
import { initialCards, cardListSelector, buttonOpenFormEdit, buttonOpenFormAddCard, 
  buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal, profileName, profileJob, 
  inputName, inputJob, validationConfig } from "../constants.js";

import './index.css';

// const popupEditForm = document.querySelector('.popup_edit-profile');
// const profileEditCardValidator = new FormValidator(validationConfig, popupEditForm);
// profileEditCardValidator.enableValidation();

// const popupAddForm = document.querySelector('.popup_add-profile');
// const newAddCardProfileValidator = new FormValidator(validationConfig, popupAddForm);
// newAddCardProfileValidator.enableValidation();

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
    handleCardClick: () => {
      popupImageModal.open(item);
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
  { submitForm: (inputsData) => {
    userInfo.setUserInfo(inputsData)
  },
});
popupEditForm.setEventListeners();
// const profileEditCardValidator = new FormValidator(validationConfig);
// profileEditCardValidator.enableValidation();


const popupAddForm = new PopupWithForm('.popup_add-profile', {
  submitForm: ({title, link}) => {
    // cardList.addItem(creatNewCard(title, link, '#card__template'));
    cardList.addItem(creatCard({name: title, link}), '#card__template')
  },
});
popupAddForm.setEventListeners();
// const newAddCardProfileValidator = new FormValidator(validationConfig, popupAddForm);
// newAddCardProfileValidator.enableValidation();


const popupImageModal = new PopupWithImage('.popup_type_image');
popupImageModal.setEventListeners();


// /* Отрисовывает новую карточку для формы PopupAdd **/
// function creatNewCard(title, link, templateSelector) {
//   return creatCard({ name: title, link: link }, templateSelector)
// };


/* Позволяет получить или перезаписать текстовое содержимое элемента **/
buttonOpenFormEdit.addEventListener('click', () => {
  popupEditForm.open();
  const inputValue = userInfo.getUserInfo();
  inputName.value = inputValue.name; 
  inputJob.value = inputValue.job;
});

buttonOpenFormAddCard.addEventListener('click', () => {
  popupAddForm.open(); 
  // newAddCardProfileValidator.disableSubmitButton();
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