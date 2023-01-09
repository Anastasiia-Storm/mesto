import {  openModal, imageModalWindow, imageElement, imageCaption } from './index.js';


export const initialCards = [
  {
    name: 'Памуккале, Турция',
    link: 'http://www.orangesmile.com/extreme/img/main/pamukkale-travertine_1.jpg'
  },
  {
    name: 'Ледяная пещера',
    link: 'https://35photo.ru/photos_main/240/1202736.jpg'
  },
  {
    name: 'Национальный парк',
    link: 'https://i.pinimg.com/originals/a4/72/54/a472549e39762db4dfb2f3467eab7b62.jpg'
  },
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
  }
];


class Card {
  constructor(data) { // Передаю данные в виде объекта, а в самом классе присвоить полям нужные свойства:
    this._name = data.name;
    this._link = data.link;
  }


  /** Получить нужную разметку */
  _getTemplateCard() {
    const cardElement = document
      .querySelector('#card__template')
      .content
      .querySelector('.element')
      .cloneNode(true); // Клонирую элемент

    return cardElement // Возвращаю разметку карточки
  }


  /** Лайк */
  _handClickleLikeButton(evt) {
    evt.target.classList.toggle('element__like_active');
  }


  /** Удаление карточки */
  _handClickDeleteButton() {
    this._element.remove();
    this._element = null;
  }


  /** Открытие модального окна */
  _handleOpenPopup() {
    imageElement.alt = this._name;
    imageElement.src = this._link;
    imageCaption.textContent = this._name;

    openModal(imageModalWindow);
  }


  /** Навешиваю слушатель события */
  _setEventListeners() {
    const deleteCard = this._element.querySelector('.element__delete');
    deleteCard.addEventListener('click', () => this._handClickDeleteButton())

    const likeCard = this._element.querySelector('.element__like');
    likeCard.addEventListener('click', (evt) => this._handClickleLikeButton(evt))

    this._element.addEventListener('click', () => this._handleOpenPopup());
  }


  /** Подготовка карточки к публикации
      Метод наполняет карточки данными и функциональностью. */
   _setData() {
    const nameCard = this._element.querySelector('.element__name')
    nameCard.textContent = this._name;
    const imageCard = this._element.querySelector('.element__photo')
    imageCard.src = this._link;
    imageCard.alt = this._name;
  }


  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplateCard();
    this._setData();
    this._setEventListeners();

    return this._element;
  }
}


  /** Публикация карточек */
  initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item, '#card__template');
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
  
    // Добавляем в DOM
    document.querySelector('.elements').append(cardElement);
  });


export default Card;