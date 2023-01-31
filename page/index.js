import Card from "./../components/Card.js";
import Section from "./../components/Section.js";
import UserInfo from "./../components/UserInfo.js";
import PopupWithForm from "./../components/PopupWithForm.js";
import PopupWithImage from "./../components/PopupWithImage.js";
import { initialCards, cardListSelector, buttonOpenFormEdit, buttonOpenFormAddCard, newAddCardProfileValidator, 
  buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal, profileName, profileJob, 
  inputName, inputJob } from "../utils/constants.js";


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(creatCard(item, '#card__template'));
  },
},
cardListSelector // В качестве параметра containerSelector
);
cardList.renderItems();


/* Создание карточек **/
function creatCard(item, templateSelector) {
  const card = new Card(item, templateSelector,
  {
    handleCardClick: () => {
      popupImageModal.open(item);
    },
  });
  const addCard = card.generateCard();
    
  return addCard;
};


const userInfo = new UserInfo({ 
  name: profileName,
  job: profileJob,
});


const popupEditForm = new PopupWithForm('.popup_edit-profile',
  { submitForm: ({ name, job }) => {
    userInfo.setUserInfo({ name, job })
  },
});
popupEditForm.setEventListeners();


const popupAddForm = new PopupWithForm('.popup_add-profile', {
  submitForm: ({title, link}) => {
    cardList.addItem(creatNewCard(title, link, '#card__template'));
  }
});
popupAddForm.setEventListeners();


const popupImageModal = new PopupWithImage('.popup_type_image');
popupImageModal.setEventListeners();


/* Отрисовывает новую карточку для формы PopupAdd **/
function creatNewCard(title, link, templateSelector) {
  return creatCard({ name: title, link: link }, templateSelector)
};


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