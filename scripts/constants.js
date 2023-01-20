import FormValidator from "./FormValidator.js";


export const initialCards = [
  {
    name: 'Горы Тяньцзи',
    link: 'https://vandruy.by/wp-content/uploads/2018/11/amazing-scenary-of-prince-tianzi-mountain-china-1024x683.jpeg'
  },
  {
    name: 'Водопад Виктория',
    link: 'https://vandruy.by/wp-content/uploads/2018/02/victoria-falls-and-zambezi-national-park-zimbabwe-5-min-1024x683.jpg'
  },
  {
    name: 'Долина Йосемити',
    link: 'https://vandruy.by/wp-content/uploads/2018/11/gory-kamni-potok-stremnina.jpeg'
  },
  {
    name: 'Национальный парк',
    link: 'https://i.pinimg.com/originals/a4/72/54/a472549e39762db4dfb2f3467eab7b62.jpg'
  },
  {
    name: 'Ледяная пещера',
    link: 'https://35photo.ru/photos_main/240/1202736.jpg'
  },
  {
    name: 'Памуккале, Турция',
    link: 'http://www.orangesmile.com/extreme/img/main/pamukkale-travertine_1.jpg'
  }
];


/** Контейнеры */
export const profileFormModalWindow = document.querySelector('.popup_edit-profile');
export const cardFormModalWindow = document.querySelector('.popup_add-profile');


/** Кнопки и прочие DOM узлы */
export const buttonOpenFormEdit = document.querySelector('.profile__edit-button');
export const buttonCloseFormEdit = profileFormModalWindow.querySelector('.popup__close-button');
export const buttonCloseFormAddCard = cardFormModalWindow.querySelector('.popup__close-button');


/** DOM узлы профиля
    Получаю значение полей jobInput и nameInput из свойства value */
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');


/** Данные форм и элементы форм */
export const cardNameInputValue = cardFormModalWindow.querySelector('.popup__input_type_card-name');
export const cardLinkInputValue = cardFormModalWindow.querySelector('.popup__input_type_url');


/** Элемент списка */
export const cardsContainer = document.querySelector('.elements'); 


/** Находим поля формы в DOM */
export const nameInput = document.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
export const jobInput = document.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()
export const buttonOpenEdit = document.querySelector('.profile__edit-button');

export const title = document.querySelector('.profile__name');
export const about = document.querySelector('.profile__job');
export const inputName = document.querySelector('.popup__input_type_name');
export const inputJob = document.querySelector('.popup__input_type_job');

export const imageModalWindow = document.querySelector('.popup_type_image');
export const imageElement = imageModalWindow.querySelector('.popup__photo');
export const imageCaption = imageModalWindow.querySelector('.popup__caption');
export const buttonOpenFormAddCard = document.querySelector('.profile__add-button');
export const buttonCloseImageModal = imageModalWindow.querySelector('.popup__close-button');


export const validationConfig  = {
  formSelector: '.popup__form', // Это объекты с селекторами формы
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};


export const popupEditForm = document.querySelector('.popup_edit-profile');
export const profileEditCardValidator = new FormValidator(validationConfig, popupEditForm);
profileEditCardValidator.enableValidation();

export const popupAddForm = document.querySelector('.popup_add-profile');
export const newAddCardProfileValidator = new FormValidator(validationConfig, popupAddForm);
newAddCardProfileValidator.enableValidation();