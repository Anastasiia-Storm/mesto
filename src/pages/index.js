import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
import PopupDelete from "../components/PopupDelete.js";
// import Api from "../components/Api.js";
import { api } from "../components/Api.js";
import { buttonOpenFormEdit, buttonOpenFormAddCard, buttonCloseFormEdit, buttonCloseFormAddCard, buttonCloseImageModal, buttonCloseAvatar, imageModalWindow,
  inputName, inputAbout, validationConfig, avatarOverlay } from "../utils/constants.js";

import './index.css';


const popupEditFormValidation = document.querySelector('.popup_edit-profile'); 
const profileEditCardValidator = new FormValidator(validationConfig, popupEditFormValidation); 
profileEditCardValidator.enableValidation(); 

 
const popupAddFormValidation = document.querySelector('.popup_add-profile'); 
const newAddCardProfileValidator = new FormValidator(validationConfig, popupAddFormValidation); 
newAddCardProfileValidator.enableValidation();


const popupImageModal = new PopupWithImage('.popup_type_image');
popupImageModal.setEventListeners();


// const popupDelete = new PopupDelete('.popup_type_delete-card');


let userId


/* Создание карточек **/ 
const creatCard = (data) => { 
  const card = new Card(data, '#card__template', 
  {
    handleCardClick: (cardData) => {
      popupImageModal.openCardImage(cardData)
   }, 

    handleCardLike: (card) => {
      if(card.checkUserId()) {
        api.deleteLike(data)
        .then((res) => {
          card.deleteLike();
          card.numberOfLikes(res);
			  });
		  } else {
        api.likeCard(data)
        .then((res) => {
          card.likeCard();
          card.numberOfLikes(res);
			  })
		  }
	  }, 

	  handleDeleteIconClick: (card) => {
      popupDelete.submitCallback(() => {
        api.deleteCard(card._data._id)
        .then(() => {
          card.removeCard()
        })
		    .then(() => {
          popupDelete.close();
        })
		    .catch((err) => {
          console.log(err); 
        })
		  })
		  popupDelete.open();
	  },
    userId,
})
  const addCard = card.generateCard(); 

  return addCard;
};


const defaultCardList = new Section({
  renderer: (item) => {
    const card = creatCard(item, userId)
    defaultCardList.addItem(card);
  },
},
'.elements',
);


const userInfo = new UserInfo({
  userInfoSelector: '.profile__name',
  userAboutSelector: '.profile__job',
  userAvatarSelector: '.profile__avatar'
});


Promise.all([
	api.informationAboutUsers(),
	api.getInitialCards()
])
.then(([user, cards]) => {
	const name = user.name;
	const about = user.about;
	const avatar = user.avatar;
	userId = user._id;
	userInfo.setUserInfo({ //get user info from server 
		name,
		about,
		avatar,
	});
	defaultCardList.renderItems(cards)
})
.catch((err) => {
    console.log(err); 
  });



const popupEditForm = new PopupWithForm('.popup_edit-profile',
  { 
    handleSubmit: ({name, about}) => {

      const data = { name, about }
      api.editProfile(data)
      .then(() => {
        userInfo.setUserInfo({ name, about })
      })
      .then(() => {
        popupEditForm.close();
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



const avatarForm = new PopupWithForm('.popup_update_avatar',
  {
    handleSubmit: ({ avatar }) => {
      
      const data = { avatar };
      api.changeAvatar(data)
      .then(() => {
        userInfo.setUserInfo({
          avatar
        });
      })
      .then(() => {
        avatarForm.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
    }
  }
); 






/* Позволяет получить или перезаписать текстовое содержимое элемента **/
buttonOpenFormEdit.addEventListener('click', () => {
  popupEditForm.open();
  const inputValue = userInfo.getUserInfo();

  inputName.value = inputValue.name; 
  inputAbout.value = inputValue.about;

  // const popupEditFormOpen = popupEditForm
  // popupEditFormOpen.open();
});

buttonOpenFormAddCard.addEventListener('click', () => {
  popupAddForm.open(); 
  newAddCardProfileValidator.disableSubmitButton();
});

avatarOverlay.addEventListener('click', () => {
  avatarForm.open();
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

buttonCloseAvatar.addEventListener('click', () => {
  avatarForm.close();
});