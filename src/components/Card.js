export default class Card {
  constructor(data, templateSelector, { handleCardClick, handleCardLike, handleDeleteClick, userId }) { // Передаю данные в виде объекта, а в самом классе присвоить полям нужные свойства:
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleDeleteClick = handleDeleteClick;
    this._templateSelector = templateSelector;
    // this._cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card__template');
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

    this._imageCard.addEventListener('click', () => this._handleCardClick
    ({ title: this._name, link: this._link }));


    this._buttonLike = this._element.querySelector('.element__like-button');
		this._buttonLike.addEventListener('click', () => {
      this._handleCardLike(this);
		});


    this._buttonDelete = this._element.querySelector('.element__delete-button');
		this._buttonDelete.addEventListener('click', (evt) => {
			this._handleDeleteClick(this)
		});
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
    this._cardLike = this._card.querySelector('.element__like');
    this._setData();
    this._setEventListeners();   

    return this._element;
  }

  deleteLike = () => {
		this._cardLike.classList.remove('element__like_active')
	};

	likeCard = () => {
		this._cardLike.classList.add('element__like_active')
	};
}