class Card {
  constructor(name, link) { // Передаю данные в виде объекта, а в самом классе присвоить полям нужные свойства:
  this._name = name;
  this._link = link;
  // title и image — приватные поля, 
  // они нужны только внутри класса
  }


  // Получаю нужную разметку
  _getTemplateCard() {
  const cardElement = document
  .querySelector('.card__template')
  .content
  .querySelector('.element')
  cloneNode(true); // Клонирую элемент

  return cardElement // Возвращаю разметку карточки
  }

  // Подготовка карточки к публикации
  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._newCard = this._getTemplateCard();

    // Добавим данные
    this._newCard.querySelector('.element__photo').src = this._link;
    this._newCard.querySelector('.element__info').textContent = this._name;

    // Вернём элемент наружу
    return this._newCard;
  }
}

initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item.name, item.link);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

    // Добавляем в DOM
    document.querySelector('.elements').append(cardElement);
}); 

export default Card;
