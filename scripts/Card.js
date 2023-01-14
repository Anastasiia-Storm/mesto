import { imageModalWindow, closeImagePopup } from './utils.js';


class Card {
  constructor(data, templateSelector, openImagePopup) { // Передаю данные в виде объекта, а в самом классе присвоить полям нужные свойства:
    this._name = data.name;
    this._link = data.link;
    this._openImagePopup = openImagePopup;
    this._closeImagePopup = closeImagePopup;
    this._templateSelector = templateSelector,'#card__template';;
  }


  /** Получить нужную разметку */
  _getTemplateCard() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true); // Клонирую элемент

    return cardElement; // Возвращаю разметку карточки
  }


  _handleLikeButton(evt) { 
    evt.target.classList.toggle('element__like_active'); 
  } 


  /** Удаление карточки */
  _handleDeleteButton() {
    this._element.remove();
    this._element = null;
  }


  _handlePreviewImage() {
    this._openImagePopup({ name: this._name, link: this._link });
    this._closeImagePopup(imageModalWindow);
  }

  
  /** Навешиваю слушатель события */
  _setEventListeners() {
    const deleteCard = this._element.querySelector('.element__delete');
    deleteCard.addEventListener('click', () => this._handleDeleteButton())

    const likeCard = this._element.querySelector('.element__like');
    likeCard.addEventListener('click', (evt) => this._handleLikeButton(evt))

    const imageCard = this._element.querySelector('.element__photo');
    imageCard.addEventListener('click', () => this._handlePreviewImage()); 
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

export default Card;