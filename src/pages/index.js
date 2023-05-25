import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
// import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
// import Api from "../components/Api.js";
import { api } from "../components/Api.js";
// import { buttonOpenFormEdit, buttonOpenFormAddCard, buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal, imageModalWindow,
//   inputName, inputJob, validationConfig } from "../utils/constants.js";

import './index.css';



/* Создание карточек **/ 
const creatCard = (data) => { 
  const card = new Card(data, '#card__template', 
  {
    handleCardClick: (cardData) => {
      popupImageModal.openCardImage(cardData)
   }
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





// api.informationAboutUsers().then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err); // выведем ошибку в консоль
// }); 


// api.downloadСardsServer().then((res) => {
//   console.log("res =====>", res);
// })
// .catch((err) => {
//   console.log(err); // выведем ошибку в консоль
// }); 



// api.editProfile().then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err); // выведем ошибку в консоль
// }); 




// const creatItem = (item) => {
//   const card = new Card(item, cards).generateCard();
//   cards.addCard(card);
// }




const popupEditFormValidation = document.querySelector('.popup_edit-profile'); 
const profileEditCardValidator = new FormValidator(validationConfig, popupEditFormValidation); 
profileEditCardValidator.enableValidation(); 

 
const popupAddFormValidation = document.querySelector('.popup_add-profile'); 
const newAddCardProfileValidator = new FormValidator(validationConfig, popupAddFormValidation); 
newAddCardProfileValidator.enableValidation();


// const cardList = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     cardList.addItem(creatCard(item));
//   },
// },
//   '.elements',
// );
// cardList.renderItems();


// /* Создание карточек **/ 
// function creatCard(item) { 
//   const card = new Card(item, '#card__template', 
//   {
//     handleCardClick: (cardData) => {
//       popupImageModal.openCardImage(cardData)
//    }
//   });
//   const addCard = card.generateCard(); 

//   return addCard;
// }; 




const popupImageModal = new PopupWithImage('.popup_type_image');
popupImageModal.setEventListeners();


const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job',
});


// const popupEditForm = new PopupWithForm('.popup_edit-profile',
//   { 
//     submitForm: (inputsData) => {
//       userInfo.setUserInfo(inputsData);
//     },
//   },
// );
// popupEditForm.setEventListeners();


// const popupAddForm = new PopupWithForm('.popup_add-profile', 
//   {
//     submitForm: ({title, link}) => {
//       cardList.addItem(creatCard({name: title, link}), '#card__template')
//     },
//   }
// );
// popupAddForm.setEventListeners();


/* Позволяет получить или перезаписать текстовое содержимое элемента **/
// buttonOpenFormEdit.addEventListener('click', () => {
//   popupEditForm.open();
//   const inputValue = userInfo.getUserInfo();
//   inputName.value = inputValue.name; 
//   inputJob.value = inputValue.job;
// });

// buttonOpenFormAddCard.addEventListener('click', () => {
//   popupAddForm.open(); 
//   newAddCardProfileValidator.disableSubmitButton();
// });

// buttonCloseFormEdit.addEventListener('click', () => {
//   popupEditForm.close(); 
// });

// buttonCloseFormAddCard.addEventListener('click', () => {
//   popupAddForm.close(); 
// });

// buttonCloseImageModal.addEventListener('click', () => { 
//   imageModalWindow.close(); 
// });