export default class Card {
  constructor(data, templateSelector, {handleCardClick}) { // Передаю данные в виде объекта, а в самом классе присвоить полям нужные свойства:
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card__template');
    // this._imageCard = this._element.querySelector('.popup__photo');
    // this._nameCard = this._element.querySelector('.popup__name');
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


  _handleDeleteButton() {
    this._element.remove();
    this._element = null;
  }


  _setEventListeners() {
    const likeCard = this._element.querySelector('.element__like');
    likeCard.addEventListener('click', (evt) => this._handleLikeButton(evt));

    const deleteCard = this._element.querySelector('.element__delete');
    deleteCard.addEventListener('click', () => this._handleDeleteButton());

    const imageCard = this._element.querySelector('.element__photo');
    imageCard.addEventListener('click', () => this._handleCardClick
    ({ title: this._name, link: this._link }));
  }


  /** Подготовка карточки к публикации
      Метод наполняет карточки данными и функциональностью. */
  _setData() {
    const nameCard = this._element.querySelector('.element__name')  
    nameCard.textContent = this._name; 
    this._imageCard = this._element.querySelector('.element__photo');
    this._imageCard.src = this._link; 
    this._imageCard.alt = this._name;
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