export default class Card {
  constructor(data, templateSelector, { handleCardClick, handleCardLike, handleDeleteIconClick, userId })  { // Передаю данные в виде объекта, а в самом классе присвоить полям нужные свойства:
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleDeleteIconClick = handleDeleteIconClick;
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


  _handleDeleteButton() {
    this._element.remove();
    this._element = null;
  }
  

  _setEventListeners() {
    // const likeCard = this._element.querySelector('.element__like');
    // likeCard.addEventListener('click', (evt) => this._handleLikeButton(evt));

    // const deleteCard = this._element.querySelector('.element__delete');
    // deleteCard.addEventListener('click', () => this._handleDeleteButton());

    this._imageCard.addEventListener('click', () => this._handleCardClick
    ({ title: this._name, link: this._link }));


    this._buttonLike = this._element.querySelector('.element__like-button');
		this._buttonLike.addEventListener('click', () => {
      this._handleCardLike(this);
		});


    this._buttonDelete = this._element.querySelector('.element__delete-button');
		this._buttonDelete.addEventListener('click', (evt) => {
			this._handleDeleteIconClick(this)
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


    // // Счетчик лайков при рендере
    // this._cardLikesCounter.textContent = this._likes.length;


    // // Отрисовка лайков
    // if (history._likes.some(user => user._id === this._userId)) {
    //   this._cardLikeButton.classList.add('element__like-button_active');
    // }
  }


  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplateCard();
    this._cardLikeButton = this._element.querySelector('.element__like-button');
    this._cardLikesCounter = this._element.querySelector('.element__likes-number');
    this._deleteButton = this._element.querySelector('.element__delete-button')
    // if (this._data.likes.find(item => item._id === this._userId)) {
		// 	this._cardLikeButton.classList.add('element__delete-button_active')
		// }
    // this._element.id = this._cardId;
    // this._cardLikesNumber.textContent = this._likes.length;
		// if (this._ownerId === this._userId){
		// 	this.setDeleteVisible()
		// }
    this._setData();
    this._setEventListeners();   

    return this._element;
  }


  deleteLike = () => {
		this._cardLikeButton.classList.remove('element__like-button_active')
	};

	likeCard = () => {
		this._cardLikeButton.classList.add('element__like-button_active')
	};


  numberOfLikes = () => {
    this._cardLikesCounter.textContent = data.likes.length;
		this._likes = data.likes;
  }


  checkUserId = () => {
		return this._likes.some(item => item._id === this._userId)
	};


  setDeleteVisible(){
		this._buttonDelete = this._element.querySelector('.element__delete-button');
		this._buttonDelete.classList.add('element__delete-button_active')
	}
}