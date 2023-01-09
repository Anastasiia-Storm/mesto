import {  openModal, imageModalWindow, imageElement, imageCaption } from './index.js';
import { initialCards } from './constants.js';


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
  _handleImageClick() {
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

    this._element.addEventListener('click', () => this._handleImageClick());
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