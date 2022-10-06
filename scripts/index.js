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
    name: 'Пещеры',
    link: 'https://35photo.ru/photos_main/240/1202736.jpg'
  },
  {
    name: 'Памуккале, Турция',
    link: 'http://www.orangesmile.com/extreme/img/main/pamukkale-travertine_1.jpg'
  }
];


// Темплейты
const cardTemplate = document.querySelector('#card__template')
.content.querySelector('.element'); // Нахожу template элемент и беру контент карточки <li></li>


// Контейнеры
const editFormModalWindow = document.querySelector('.popup__edit-profile');
const cardFormModalWindow = document.querySelector('.popup__add-profile');
const imageModalWindow = document.querySelector('.popup_type_image');


// Кнопки и прочие DOM узлы
const openFormEditButton = document.querySelector('.profile__edit-button');
const openFormAddCardButton = document.querySelector('.profile__add-button');
const closeFormEditButton = editFormModalWindow.querySelector('.popup__close-button');
const closeFormAddCardButton = cardFormModalWindow.querySelector('.popup__close-button');
const closeImageModalButton = imageModalWindow.querySelector('.popup__close-button');


// DOM узлы профиля
// Получаю значение полей jobInput и nameInput из свойства value
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');


// // Данные форм и элементы форм
const cardNameInputValue = cardFormModalWindow.querySelector('.popup__input_type_card-name');
const cardLinkInputValue = cardFormModalWindow.querySelector('.popup__input_type_url');
const imageElement = imageModalWindow.querySelector('.popup__photo');
const imageCaption = imageModalWindow.querySelector('.popup__caption');


// // Элемент списка
const cards = document.querySelector('.elements'); 


// // Находим форму в DOM
let formElement = document.querySelector('.popup'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()
let openEditButton = document.querySelector('.profile__edit-button');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeModal(editFormModalWindow);
}

  // Получите значение полей jobInput и nameInput из свойства value
  //   let profileName = document.querySelector('.profile__name');
  //   let profileJob = document.querySelector('.profile__description');

    // Выберите элементы, куда должны быть вставлены значения полей

 
    // profileName.textContent = nameInput.value
    // profileJob.textContent = jobInput.value
    // Вставьте новые значения с помощью textContent

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - "отправка"

editFormModalWindow.addEventListener('submit', formSubmitHandler); 


openEditButton.addEventListener('click', function() {  // Добавить слушатель события 
  let title = document.querySelector('.profile__name');
  let about = document.querySelector('.profile__job');
  let inputName = document.querySelector('.popup__input_type_name');
  let inputJob = document.querySelector('.popup__input_type_job');
  inputName.value = title.textContent; // textContent позволяет получить или перезаписать текстовое содержимое элемента.
  inputJob.value = about.textContent;
  openModal(editFormModalWindow);
})


// Функция открытия popup
function openModal(modalWindow) { // Открывает модальное окно
  console.log(modalWindow);  // Навешивает класс
  modalWindow.classList.add('popup_opened');
}


// Функция закрытия popup
function closeModal(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}


// Запускаю функции открытия и закрытия popup
openFormEditButton.addEventListener('click', () => {
  openModal(editFormModalWindow); // Запускаю функцию openModal
});

openFormAddCardButton.addEventListener('click', () => {
  openModal(cardFormModalWindow); // Запускаю функцию openModal
});

closeFormEditButton.addEventListener('click', () => {
  closeModal(editFormModalWindow); // Запускаю функцию closeModal
});

closeFormAddCardButton.addEventListener('click', () => {
  closeModal(cardFormModalWindow); // Запускаю функцию closeModal
});

closeImageModalButton.addEventListener('click', () => {
  closeModal(imageModalWindow); // Запускаю функцию closeModal
});


// Лайк
function handleLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

// // Удаление
function handDelete(evt) {
  evt.target.closest('.element').remove();
}

// // Функция открытия картинки
function handlePreview(text) {
  // Контент модального окна
  imageElement.src = text.link;          // Картинка
  imageCaption.textContent = text.name;  // Подпись с картинке

  openModal(imageModalWindow); // Открыть модальное окно
}


// // Внутри этой функции я вешаю слушателей на карточку createCard
function setEventListeners(card, text) {
  const likeButton = card.querySelector('.element__like');
  likeButton.addEventListener('click', handleLike);

  const deleteButton = card.querySelector('.element__delete');
  deleteButton.addEventListener('click', handDelete);

  const cardImage = card.querySelector('.element__photo');
  cardImage.addEventListener('click', () => {
    handlePreview(text);
  });
}


initialCards.forEach(render); // forEach перебирает массив и выполняет для каждого элемента свой код.
// Метод forEach нужен, когда мы хотим просто пройтись по массиву и для каждого элемента что-то сделать.
// В данном случае с помощью forEach начинаем применять функцию createCard


// Создает и возвращает карточку
function createCard(text) { // name, link
  const cardElement = cardTemplate.cloneNode(true); // Клонирую <li></li>
  const cardImage = cardElement.querySelector('.element__photo'); // Ищу и добавляю картинку
  cardImage.src = text.link; // Взяла img и добавила ссылку
  cardElement.querySelector('.element__name').textContent = text.name; // Взяла title и добавила текст

  setEventListeners(cardElement, text);

  return cardElement; // Возвращаю карточку
}


 // Отрисовывает карточку через вспомогательную функцию
 // Принимает объект (name, link)
 // Добавляет её в DOM
function render(text) {
 console.log(text);

 const newCard = createCard(text); // Это будет новая карточка

 cards.prepend(newCard);
}


function handleAddNewCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  render({name: cardNameInputValue.value, link: cardLinkInputValue.value});
  closeModal(cardFormModalWindow);
}

cardFormModalWindow.addEventListener('submit', handleAddNewCard);