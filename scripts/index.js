// let popupElement = document.querySelector('.popup');
// Нахожу и выбираю элементы по имени класса


// // Находим форму в DOM
let formElement = document.querySelector('.popup'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

////////////zважно

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    formElement.classList.remove('popup_opened'); 
}

  // Получите значение полей jobInput и nameInput из свойства value
    // let profileName = document.querySelector('.profile__name');
    // let profileJob = document.querySelector('.profile__description');

    // Выберите элементы, куда должны быть вставлены значения полей

 
    // profileName.textContent = nameInput.value
    // profileJob.textContent = jobInput.value
    // Вставьте новые значения с помощью textContent

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - "отправка"

formElement.addEventListener('submit', formSubmitHandler); 

// editFormModalWindow.addEventListener('submit', formSubmitHandler); 

// // openEditButton.addEventListener('click', function() {  // Добавить слушатель события 
// //   let title = document.querySelector('.profile__name');
// //   let about = document.querySelector('.profile__job');
// //   let inputName = document.querySelector('.popup__input_type_name');
// //   let inputJob = document.querySelector('.popup__input_type_job');
// //   inputName.value = title.textContent; // textContent позволяет получить или перезаписать текстовое содержимое элемента.
// //   inputJob.value = about.textContent;
//  // Присвоение класса элементу
// })


// важно/////////////////////////////////

// Шесть карточек «из коробки»
// При загрузке на странице должно быть 6 карточек, которые добавит JavaScript.
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(createCard); // forEach перебирает массив и выполняет для каждого элемента свой код.
                                  // Метод forEach нужен, когда мы хотим просто пройтись по массиву и для каждого элемента что-то сделать.
                                  // В данном случае с помощью forEach начинаем применять функцию createCard

function render() {
  // Создает карточку через вспомогательную функцию
  // Добавляет её в DOM
}

function createCard() {
 // Создает и возвращает карточку
}

                              
// Добавляю новые карточки через template теги 
const cards = document.querySelector('.elements'); // Нахожу элемент списка <ul></ul>
const cardTemplate = document.querySelector('#card').content; // Нахожу template элемент и беру его контент
const addButton = document.querySelector('.profile__add-button');  // Нахожу кнопку добавить
const createButton = document.querySelector('.popup__create-button'); // Нахожу кнопку создать
const popupInput = document.querySelector(".popup__input"); // инпут формы




// Основная функция рендеринга 
// function createCard(text) { // Передаем в нее text - элементы массива. Запускается столько раз, сколько элементов в массиве.
//   const newHtmlElement = cardTemplate.cloneNode(true); // Клонируем моду, чтобы создавался новый уникальный элемент, а не перезаписывался старый
//   const cardText = newHtmlElement.querySelector('.element__name'); // Нахожу element__name и добавляю в него текст
//   const cardImage = newHtmlElement.querySelector('.element__photo'); // Нахожу element__photo и добавляю фото
//   header.textContent = text.name; // устанавливаем заголовок элемента // textContent позволяет получить или перезаписать текстовое содержимое элемента.
//   cardText.alt = text.name; // устаналиваем название
//   cardImage.src = text.link; // устанавливаем ссылку
  

//   // cardText.textContent = text.name;
//   // cardImage.src = text.link;

//   setListenersForCreatCard(newHtmlElement); // назначаем листенеры внутри каждого элемента
//   cards.prepend(newHtmlElement);  // вставляем в DOM
// }



// function setListenersForCreatCard(element) { // Получаем карточку (element-карточка)
//   const deleteButton = element.querySelector('.element__delete'); // Нахожу кнопку удаления и кладу в переменную
//   deleteButton.addEventListener('click', handleDelete); // Навесила обработчик событий

//   const likeButton = element.querySelector('.element__like');
//   likeButton.addEventListener('clock', handleLike);

//   // const bigImageName = element.querySelector('.element__name').textContent;
//   // const bigImage = element.querySelector('.element__photo');
// }

// function handleDelete(evt) {      // Event-событие. Он содержит информацию и о произошедшем событии, и о «кликнутом» элементе.
//   const deleteButtonActive = evt.target.closest('.element');   // Tagret-цель. В нём хранится элемент, на котором сработало событие.
//                                                                  // С помощью closest получаем родителя кнопки (тег <li></li>)
//   deleteButtonActive.remove();
// }

// function handleLike(evt) {
//   const likeButtonActive = evt.target.classList.toggle('.element__like_active');
// }


// function formCreatHandler (evt) {
//   evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
//   // image.src = cardLinkInput.value; 
//   // image.alt = cardNameInput.value;
//   // setListenersForCreatCard(newHtmlElement); назначаем листене ры внутри каждого элемента

//   const newCard = {
//     name: '',
//     link: '',
//   };
  
//   newCard.name = cardNameInput.value;
//   newCard.name = cardLinkInput.value;

//   elements.prepend(createCard(newCard));

//   cardNameInput.value = '';
//   cardLinkInput.value = '';

//   popupAddProfile.classList.remove('popup_opened'); 
// }

// popupAddProfile.addEventListener('submit', formCreatHandler); 


// function handleSubmit() {
//   createCard(popupInput.value);
// } 

// createButton.addEventListener('click', handleSubmit);


// renderInitialCards();


const editFormModalWindow = document.querySelector('.popup__edit-profile');
const cardFormModalWindow = document.querySelector('.popup__add-profile');
// const imageModalWindow = document.querySelector('.');


// Кнопки
const openFormEditButton = document.querySelector('.profile__edit-button');
const openFormAddCardButton = document.querySelector('.profile__add-button');
const closeFormEditButton = editFormModalWindow.querySelector('.popup__close-button');
const closeFormAddCardButton = cardFormModalWindow.querySelector('.popup__close-button');
// const closeImageModalButton = imageModalWindow.querySelector('.popup__close-button');

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