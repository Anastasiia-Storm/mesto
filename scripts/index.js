// Темплейты
const cardTemplate = document.querySelector('#card__template')
.content.querySelector('.element'); // Нахожу template элемент и беру контент карточки <li></li>


// Контейнеры
const editFormModalWindow = document.querySelector('.popup_edit-profile');
const cardFormModalWindow = document.querySelector('.popup_add-profile');
const imageModalWindow = document.querySelector('.popup_type_image');


// Кнопки и прочие DOM узлы
const openFormEditButton = document.querySelector('.profile__edit-button');
const openFormAddCardButton = document.querySelector('.profile__add-button');
const closeFormEditButton = editFormModalWindow.querySelector('.popup__close-button');
const closeFormAddCardButton = cardFormModalWindow.querySelector('.popup__close-button');
const closeImageModalButton = imageModalWindow.querySelector('.popup__close-button');


// DOM узлы профиля
// Получаю значение полей jobInput и nameInput из свойства value
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


// Данные форм и элементы форм
const cardNameInputValue = cardFormModalWindow.querySelector('.popup__input_type_card-name');
const cardLinkInputValue = cardFormModalWindow.querySelector('.popup__input_type_url');
const imageElement = imageModalWindow.querySelector('.popup__photo');
const imageCaption = imageModalWindow.querySelector('.popup__caption');


// Элемент списка
const cards = document.querySelector('.elements'); 

// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()
const openEditButton = document.querySelector('.profile__edit-button');

const title = document.querySelector('.profile__name');
const about = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');


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
  inputName.value = title.textContent; // textContent позволяет получить или перезаписать текстовое содержимое элемента.
  inputJob.value = about.textContent;
  openModal(editFormModalWindow);
})


// Функция открытия popup
function openModal(modalWindow) { // Открывает модальное окно
  // console.log(modalWindow);  // Навешивает класс
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}


// Функция закрытия popup
function closeModal(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
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
// function handDelete(evt) {
//   evt.target.closest('.element').remove();
// }

function handDelete(evt) {
  evt.target.closest('.element').remove('card');
}

// Функция открытия картинки
function handlePreview(data) {
// Контент модального окна
  imageElement.alt = data.name;  
  imageElement.src = data.link;          // Картинка
  imageCaption.textContent = data.name;  // Подпись с картинке

  openModal(imageModalWindow); // Открыть модальное окно
}


// Внутри этой функции я вешаю слушателей на карточку createCard
function setEventListener(card, data, cardImage) {
  const likeButton = card.querySelector('.element__like');
  likeButton.addEventListener('click', handleLike);

  const deleteButton = card.querySelector('.element__delete');
  deleteButton.addEventListener('click', handDelete);

  cardImage.addEventListener('click', () => {
    handlePreview(data);
  });
}


initialCards.forEach(render); // forEach перебирает массив и выполняет для каждого элемента свой код.
// Метод forEach нужен, когда мы хотим просто пройтись по массиву и для каждого элемента что-то сделать.
// В данном случае с помощью forEach начинаем применять функцию createCard


// Создает и возвращает карточку
function createCard(data) { // name, link
  const cardElement = cardTemplate.cloneNode(true); // Клонирую <li></li>
  const cardImage = cardElement.querySelector('.element__photo'); // Ищу и добавляю картинку
  cardImage.alt = data.name;
  cardImage.src = data.link; // Взяла img и добавила ссылку
  cardElement.querySelector('.element__name').textContent = data.name; // Взяла title и добавила текст

  setEventListener(cardElement, data, cardImage);

  return cardElement; // Возвращаю карточку
}


// Отрисовывает карточку через вспомогательную функцию
// Принимает объект (name, link)
// Добавляет её в DOM
function render(data) {
 const newCard = createCard(data); // Это будет новая карточка

 cards.prepend(newCard);
}


function handleAddNewCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  render({name: cardNameInputValue.value, link: cardLinkInputValue.value});
  closeModal(cardFormModalWindow);
}

cardFormModalWindow.addEventListener('submit', handleAddNewCard);


// Функция закрытия form по нажатию esc
function closeByEsc(event) {
  if (event.key === 'Escape') {
    const popupToClose = document.querySelector('.popup_opened');
    closeModal(popupToClose);
  }
}


// Создает добавление карточки по нажатию enter на поле title
cardNameInputValue.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
  createCard(cardNameInputValue.value, cardLinkInputValue.value); // Передаю функции нужные аргументы
  }
});


// Создает добавление карточки по нажатию enter на поле link
cardLinkInputValue.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
  createCard(cardNameInputValue.value, cardLinkInputValue.value);
  }
});


// Закрытие по клику на overlay
const overlay = Array.from(document.querySelectorAll('.popup'));
overlay.forEach((popup) => {closePopupOverlay(popup); 
});

const popupContainer = document.querySelector('.popup__container');

function closePopupOverlay(popup) {
  popup.addEventListener('click', (evt) => {
    const popupContainer = evt.currentTarget
    // console.log(evt.target);
    // console.log(popupContainer);
    // console.log(evt.target !== popupContainer) // Условие, что объектом клика является не сама форма
    if (evt.target === popupContainer) {
      closeModal(popup)
    }
  })
};


// Функция, которая добавляет класс с ошибкой
const showError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => { // 3 параметра: форма, поле, сообщение об ошибке.
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);   // Значение этой переменной — ошибка, которая найдена внутри formEl.
 
  inputElement.classList.add(inputErrorClass); // Добавляет красное подчеркивание
  errorElement.textContent = errorMessage; // Так текст ошибки попадёт в нужное место.
  errorElement.classList.add(errorClass);
};


// Функция, которая удаляет класс с ошибкой
const hideError = (formElement, inputElement, {inputErrorClass, errorClass}) => { // 2 параметра: форма, поле.
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // Значение этой переменной — ошибка, которая найдена внутри formEl.
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
 
  errorElement.textContent = ""; // Это скроет ошибку под полем.
};
 

// Функция которая проверяет formInput на корректность введённых данных и вызывает hideError и showError.
const checkInputValidity = (formElement, inputElement, enumeration) => { // formElement — html-элемент формы, в которой находится проверяемое поле ввода. Он нужен для поиска элемента ошибки в форме.
  // inputElement — проверяемое поле ввода.
  if (!inputElement.validity.valid) { // Если поле popup__input не проходит валидацию, покажем ошибку
  // Передадим сообщение об ошибке вторым аргументом
    showError(formElement, inputElement, inputElement.validationMessage, enumeration);
  } else {; // Если поле проходит валидацию, скроем сообщение об ошибке
    hideError(formElement, inputElement, enumeration);
  }
};


// Обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?»
const hasInvalidInput = (inputList) => { // // Функция возвращает true, если в массиве inputList есть хотя бы один невалидный input. Если все поля валидны — false.
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => { 
     return !inputElement.validity.valid;
  });
};


const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => { // InputList и buttonElement. Первый — массив полей, второй — кнопка «Сохранить, создать».
  if (hasInvalidInput(inputList)) { // есть ли в массиве inputList невалидные поля.
    buttonElement.classList.add(inactiveButtonClass); 
    buttonElement.disabled = true; // Сделакем кнопку неактивной
} else {
    buttonElement.classList.remove(inactiveButtonClass); 
    buttonElement.disabled = false; // Иначе сделаем её активной
}
};


// Добавляю слушатель события на все поля ввода сразу
const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, ...other}) => { 
  const inputList = Array.from(formElement.querySelectorAll(inputSelector)); // Преобразовываю коллекцию в массив методом Array.from.
  const buttonElement = formElement.querySelector(submitButtonSelector);


  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, other);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  }; 


// Функция для формы
const enableValidation = ({formSelector, ...other}) => { 
  const formList = Array.from(document.querySelectorAll(formSelector)); // Создаю массив

  formList.forEach((formElement) => { // Прохожу по массиву методом forEach
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, other);
  })
}; // Функция isValid найдёт на странице и обработает все формы с классом form. Теперь валидация работает для всех форм.


enableValidation({
  formSelector: '.popup__form', // Это объекты с селекторами формы
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
})