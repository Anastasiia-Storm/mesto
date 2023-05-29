import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
// import Api from "../components/Api.js";
import { api } from "../components/Api.js";
import { buttonOpenFormEdit, buttonOpenFormAddCard, buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal, imageModalWindow,
  inputName, inputAbout, validationConfig } from "../utils/constants.js";

import './index.css';


const popupEditFormValidation = document.querySelector('.popup_edit-profile'); 
const profileEditCardValidator = new FormValidator(validationConfig, popupEditFormValidation); 
profileEditCardValidator.enableValidation(); 

 
const popupAddFormValidation = document.querySelector('.popup_add-profile'); 
const newAddCardProfileValidator = new FormValidator(validationConfig, popupAddFormValidation); 
newAddCardProfileValidator.enableValidation();


const popupImageModal = new PopupWithImage('.popup_type_image');
popupImageModal.setEventListeners();


let userId


/* Создание карточек **/ 
const creatCard = (data) => { 
  const card = new Card(data, '#card__template', 
  {
    handleCardClick: (cardData) => {
      popupImageModal.openCardImage(cardData)
   }, userId,

    handleCardLike: (card) => {
      if(card.checkUserId()) {
        api.deleteLike(data)
        .then((res) => {
          card.deleteLike();
          card.countLikes(res);
			  });
		  } else {
        api.likeCard(data)
        .then((res) => {
          card.setLike();
          card.countLikes(res);
			  })
		  }
	  }, 

	  handleDeleteClick: (card) => {
      popupDeleteConfirmation.setSubmitCallback(() => {
        api.deleteCard(card._data._id)
        .then(() => {
          card.removeCard()
        })
		    .then(() => {
          popupDeleteConfirmation.close();
        })
		    .catch((err) => {
          console.log(err); 
        })
		  })
		  popupDeleteConfirmation.open();
	  }
})
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


const userInfo = new UserInfo({
  userInfoSelector: '.profile__name',
  userAboutSelector: '.profile__job',
});


const popupEditForm = new PopupWithForm('.popup_edit-profile',
  { 
    handleSubmit: ({name, about}) => {

      const data = { name, about }
      api.editProfile(data)
      .then(() => {
        userInfo.setUserInfo({ name, about })
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
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
  inputAbout.value = inputValue.about;
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
