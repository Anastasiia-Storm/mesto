const initialCards = [
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
    .querySelector('#card__template')
    .content
    .querySelector('.element')
    .cloneNode(true); // Клонирую элемент

  return cardElement // Возвращаю разметку карточки
  }
  

  // Подготовка карточки к публикации
  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplateCard();

    // Добавим данные
    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._name;

    // Вернём элемент наружу
    return this._element;
  }
}


  // Публикация карточек
  initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item.name, item.link);
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
  
      // Добавляем в DOM
      document.querySelector('.elements').append(cardElement);
  });


export default Card;