class Card {
  constructor(data, templateSelector) { // Передаю данные в виде объекта, а в самом классе присвоить полям нужные свойства:
  this._title = data.title;
  this._image = data.image;
  // title и image — приватные поля, 
  // они нужны только внутри класса
  this._templateSelector = templateSelector; // записали селектор в приватное поле
  }


  // Получаю нужную разметку
  _getTemplateCard() {
  const card = document
  .querySelector('.card__template')
  .content // Извлекаю содержимое из card__template
  .querySelector('.element')
  cloneNode(true); // Клонирую элемент

  return card // Возвращаю разметку карточки
  }
}