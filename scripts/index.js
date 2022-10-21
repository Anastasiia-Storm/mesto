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


// // Данные форм и элементы форм
const cardNameInputValue = cardFormModalWindow.querySelector('.popup__input_type_card-name');
const cardLinkInputValue = cardFormModalWindow.querySelector('.popup__input_type_url');
const imageElement = imageModalWindow.querySelector('.popup__photo');
const imageCaption = imageModalWindow.querySelector('.popup__caption');


// // Элемент списка
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

// // Функция открытия картинки
function handlePreview(data) {
  // Контент модального окна
  imageElement.alt = data.name;  
  imageElement.src = data.link;          // Картинка
  imageCaption.textContent = data.name;  // Подпись с картинке

  openModal(imageModalWindow); // Открыть модальное окно
}


// // Внутри этой функции я вешаю слушателей на карточку createCard
function setEventListeners(card, data, cardImage) {
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

  setEventListeners(cardElement, data, cardImage);

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
  createCard(cardNameInputValue.value, cardLinkInputValue.value);
  }
});


// Создает добавление карточки по нажатию enter на поле ссылки
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
    console.log(evt.target);
    console.log(popupContainer);
    console.log(evt.target !== popupContainer) // Условие, что объектом клика является не сама форма
    if (evt.target === popupContainer) {
      closeModal(popup)
    }
  })
};





// const form = document.forms.add;
// const addButton = document.querySelector('.popup__save-button');
// const titleInput = form.elements.title;
// const linkInput = form.elements.link;


// function setSubmitButtonState(isFormValid) { // Она будет отвечать за состояние кнопки сабмита.
//   if (isFormValid) {
//     addButton.removeAttribute('disabled');
//     addButton.classList.remove('popup__save-button_disabled');
//   } else {
//     addButton.setAttribute('disabled', true);
//     addButton.classList.add('.popup__save-button_disabled');
//   }
// } 

// form.addEventListener('submit', function (evt) {
//   evt.preventDefault();
//   createCard(titleInput.value, linkInput.value);

//   setSubmitButtonState(false);
//   form.reset();
// });

// form.addEventListener('input', function (evt) {
//   console.log(evt);
//   const isValid = titleInput.value.length > 0 && linkInput.value.length > 0; // Не дает пользователю нажимать на кнопку, когда поля пустые
//   setSubmitButtonState(isValid);
// }); 

// const form = document.querySelector('.popup__form');
// const formInput = form.querySelector('.popup__input');
// const formError = form.querySelector(`.${formInput.id}-error`); // Нахожу элемент ошибки по уникальному классу поля ввода, к которому она относится.

// Слушатель события input
// formInput.addEventListener('input', function (evt) {
//   // Выведем в консоль значение свойства validity.valid поля ввода, 
//   // на котором слушаем событие input
//   console.log(evt.target.validity.valid);
// }); 

// const errorMessage = {
// empty: 'Вы пропустили это поле',
// wrongLength: 'Должно быть от 2 до 40 символов',
// wrongLengthAbout: 'Должно быть от 2 до 200 символов',
// wrongURL: 'Ввведите адрес сайта',
// }

// function isValid(input) {
// input.setCustomValidity(""); // Очищаю span этой строкой

// if (input.validity.valueMissing) {
// input.setCustomValidity(errorMessage.empty);

// return false;
// }

// if (input.validity.typeMismatch && input.type === 'url') { // input.type === 'url' это чтобы не вбили туда email
// input.setCustomValidity(errorMessage.wrongURL);

// return false;
// }

// return input.checkValidity();
// }

////////////////////////////////////////////////////////////////////////////////////
// // Функция, которая добавляет класс с ошибкой
// const showInputError = (formElement, inputElement, errorMessage) => {
//   // Находим элемент ошибки внутри самой функции
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
//   inputElement.classList.add('popup__input_type_error');
//   errorElement.textContent = errorMessage; // Так текст ошибки попадёт в нужное место.
//   errorElement.classList.add('popup__input-error_visible');
// };

// // // Функция, которая удаляет класс с ошибкой
// const hideInputError = (formElement, inputElement) => {
//   // Находим элемент ошибки
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('popup__input_type_error');
//   errorElement.classList.remove('popup__input-error_visible');
//   // 2. Очистите свойство textContent элемента formError.
//   errorElement.textContent = "";
// };


// // // Функция, которая проверяет валидность поля
// const checkInputValidity= (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     // showInputError теперь получает параметром форму, в которой
//     // находится проверяемое поле, и само это поле
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     // hideInputError теперь получает параметром форму, в которой
//     // находится проверяемое поле, и само это поле
//     hideInputError(formElement, inputElement);
//   }
// };


// const setEventListener = (formElement) => { // Добавляю слушатели событий на все формы
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//   const buttonElement = formElement.querySelector('.popup__save-button');


//   toggleButtonState(inputList, buttonElement); // Это проверит состояние кнопки при первой загрузке страницы. Тогда кнопка перестанет быть активной до ввода данных в одно из полей.
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () { //  Обработчик, который проверяет валидность поля:
//       checkInputValidity(formElement, inputElement);


//       toggleButtonState(inputList, buttonElement); // Такой вызов проверит состояние кнопки при каждом изменении символа в любом из полей.
//       });
//     });
//   }; 
    
//   enableValidation = () => {
//     const formList = Array.from(document.querySelectorAll('.popup__form'));
  
//    formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
  
//       setEventListener(formElement);
//   });
//   };
    
//     enableValidation();

// const hasInvalidInput = (inputList) => { // Обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?».
//   // проходим по этому массиву методом some
//   return inputList.some((inputElement) => {
//      return !inputElement.validity.valid; // Функция возвращает true, если в массиве inputList есть хотя бы один невалидный input. Если все поля валидны — false
//   }); 
// };

// const toggleButtonState = (inputList, buttonElement) => { // inputList - массив полей, buttonElement - кнопка.
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('popup__save-button_disabled '); 
// } else {
//   buttonElement.classList.remove('popup__save-button_disabled '); 
// }
// };
    
/////////////////////////////////////////////////////////////////
// const formAddCard = document.forms.add;
// const formUser = document.forms.user;

// const errorMessage = {
//   empty: 'Вы пропустили это поле',
//   wrongLength: 'Должно быть от 2 до 40 символов',
//   wrongLengthAbout: 'Должно быть от 2 до 200 символов',
//   wrongURL: 'Ввведите адрес сайта',
// }

// function isValid(input) {
//   input.setCustomValidity(""); // Очищаю span этой строкой

//   if (input.validity.valueMissing) {
//     input.setCustomValidity(errorMessage.empty);

//   return false;
//   }

//   if (input.validity.typeMismatch && input.type === 'url') { // input.type === 'url' это чтобы не вбили туда email
//     input.setCustomValidity(errorMessage.wrongURL);

//   return false;
// }

//   return input.checkValidity();
// }

// function isValidField(input) { // Будет проверять каждое наше поле
//   const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
//   isValid(input);
//   errorSpan.textContent = input.validationMessage;
// }

// function setSubmitButton(button, state) { // Отвечает за смену стилизации кнопки

// }

// function handleValidateInput(evt) {// Функция которая проверяет соответсвует ли то что ввели в поля input тому что нам нужно
//   const currentForm = evt.currentTarget; // Будем находить форму в которой сейчас работаем
//   const submitButton = currentForm.querySelector('.popup__save-button') // Нашли кнопку

//   isValidField(evt.target);
// }


// function sendForm(evt) { // Функция проверяет прошла форма валидацию или нет
//   evt.preventDefault(); // Отменяю стандартную перезагрузку страницы после отправки формы

//   const currentForm = evt.target; // Будем находить форму в которой сейчас работаем

//   if (currentForm.checkValidity()) { // Проверяю форму на валидность, chackValidity выдаст true или false
//     console.log("Форма успешно отправлена");
//     currentForm.reset(); // Сбрасываю все поля формы после отправки формы
//   } else {
//     console.log("Что-то пошло не так");
//   }
// }

// formAddCard.addEventListener('submit', sendForm);
// formAddCard.addEventListener('input', handleValidateInput);

// formUser.addEventListener('submit', sendForm);
// formUser.addEventListener('input', handleValidateInput);