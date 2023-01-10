import { handlePreview } from './utils.js';
import { initialCards } from './constants.js';
import { imageModalWindow } from './utils.js';


class Card {
  constructor(data) { // Передаю данные в виде объекта, а в самом классе присвоить полям нужные свойства:
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = document.querySelector('#card__template');
  }


  /** Получить нужную разметку */
  _getTemplateCard() {
    const cardElement = this._templateSelector
      .content
      .querySelector('.element')
      .cloneNode(true); // Клонирую элемент

    return cardElement // Возвращаю разметку карточки
  }

////////////Исправить////////////
  /** Лайк */
  _handleLikeButton(evt) {
    evt.target.classList.toggle('element__like_active');
  }
/////////////////////////////////

  /** Удаление карточки */
  _handleDeleteButton() {
    this._element.remove();
    this._element = null;
  }


  /** Открытие модального окна */
  // _openImagePopup() {
  //   this._openImagePopup(imageModalWindow);
  //   handlePreview();
  // }


  /** Навешиваю слушатель события */
  _setEventListeners() {
    const deleteCard = this._element.querySelector('.element__delete');
    deleteCard.addEventListener('click', () => this._handleDeleteButton())

    const likeCard = this._element.querySelector('.element__like');
    likeCard.addEventListener('click', (evt) => this._handleLikeButton(evt))

    // this._element.addEventListener('click', () => this._openImagePopup());
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