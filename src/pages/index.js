import Card from "../components/Card.js";
import Section from "../components/Section.js";
// import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
// import Api from "../components/Api.js";
import { api } from "../components/Api.js";
import { buttonOpenFormEdit, buttonOpenFormAddCard, buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal, imageModalWindow,
  inputName, inputJob, validationConfig } from "../utils/constants.js";

import './index.css';
let userId

/* Создание карточек **/ 
const creatCard = (data) => { 
  const card = new Card(data, '#card__template', 
  {
    handleCardClick: (cardData) => {
      popupImageModal.openCardImage(cardData)
   }, userId,
  });
  const addCard = card.generateCard(); 

  return addCard;
};


const defaultCardList = new Section({
  renderer: (item) => {
    const card = creatCard(item)
    defaultCardList.addItem(card);
  },
},
'.elements',
);


api.getInitialCards()
.then((cards) => {
  defaultCardList.renderItems(cards)
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
});





// const popupAddForm = new PopupWithForm('.popup_add-profile', handleSubmit);
// popupAddForm.setEventListeners();

// api.addCard().then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err); // выведем ошибку в консоль
//   }); 

const popupEditFormValidation = document.querySelector('.popup_edit-profile'); 
const profileEditCardValidator = new FormValidator(validationConfig, popupEditFormValidation); 
profileEditCardValidator.enableValidation(); 

 
const popupAddFormValidation = document.querySelector('.popup_add-profile'); 
const newAddCardProfileValidator = new FormValidator(validationConfig, popupAddFormValidation); 
newAddCardProfileValidator.enableValidation();


const popupImageModal = new PopupWithImage('.popup_type_image');
popupImageModal.setEventListeners();


const popupEditForm = new PopupWithForm('.popup_edit-profile',
  { 
    handleSubmit: (inputsData) => {
      userInfo.setUserInfo(inputsData);
    },
  },
);
popupEditForm.setEventListeners();



const popupAddForm = new PopupWithForm('.popup_add-profile', 
  {
    handleSubmit: ({title, link}) => {
    
      const data = { title, link }
      api.addCard(data)
      .then((card) => {
        const newCard = creatCard(card)
        defaultCardList.addNewItem(newCard);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
    },
  }
);
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
  imageModalWindow.close(); 
});






// const userInfo = new UserInfo({
//   nameSelector: '.profile__name',
//   jobSelector: '.profile__job',
// });


// api.editProfile()
// .then((user) => {
//   const name = user.name;
//   const job = user.job;
//   userId = user._id;
//   userInfo.setUserInfo({
//     name, 
//     job,
//   })
// })
// .catch((err) => {
//   console.log(err); // выведем ошибку в консоль
// }); 