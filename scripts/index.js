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

// const formAddCard = document.forms.add; // Находим форму с названием "add"
// const formUser = document.forms.user; // Находим форму с названием "user"
// const formInput = formAddCard.querySelector('.popup__input');
// const formError = formAddCard.querySelector(`.${formInput.id}-error`); // Нахожу элемент ошибки по уникальному классу поля ввода, к которому она относится.


// formElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });

// formInput.addEventListener('input', function (evt) {
//   // выведите validity в консоль
//   console.log(evt.target.validity);
// });



// Функция, которая добавляет класс с ошибкой
// const showError = (input) => {
//   input.classList.add('popup__input-error');
//   formError.textContent = errorMessage; // Так текст ошибки попадёт в нужное место.
//   formError.classList.add('popup__input-error_active');
// };
  

// Функция, которая удаляет класс с ошибкой
// const hideError = (input) => {
//   input.classList.remove('popup__input-error');
//   formError.classList.remove('popup__input-error_active');
//   formError.textContent="";
// };

// Проверяет formInput на корректность введённых данных и вызывает hideError и showError
// const checkInputValidity = () => {
//   if (!formInput.validity.valid) {
//     // Передадим сообщение об ошибке вторым аргументом
//     showError(formInput, formInput.validationMessage);  // Если в поле введены невалидные данные showError
//   } else {
//     hideError(formInput);
//   }
// };

const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault(); // Отменяю стандартную перезагрузку страницы после отправки формы
});

formElement.addEventListener('input', function (evt) {
  // вывожу validity в консоль
  console.log(evt.target.validity);
});

// formUser.addEventListener('input', function (evt) {
//   // вывожу validity в консоль
//   console.log(evt.target.validity);
// });



// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('popup__input_error ');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('popup__input_error ');
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
};

// Вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid); 

// const errorMessage = {
//   empty: 'Вы пропустили это поле',
//   wrongLength: 'Должно быть от 2 до 40 символов',
//   wrongLengthAbout: 'Должно быть от 2 до 200 символов',
//   wrongURL: 'Ввведите адрес сайта',
// }


// function isValid(input) {
//     input.setCustomValidity(""); // Очищаю span этой строкой

//   if (input.validity.valueMissing) {
//     input.setCustomValidity(errorMessage.empty);

//     return false;
//   }

//   if (input.validity.typeMismatch && input.type === 'url') { // input.type === 'url' это чтобы не вбили туда email
//     input.setCustomValidity(errorMessage.wrongURL);

//     return false;
//   }

//   return input.checkValidity();
// }

// function isValidField(input) { // Будет проверять каждое наше поле
//   const errorSpan = input.parentNode.querySelector(`#${formInput.id}-error`);
//   isValid(input);
//   errorSpan.textContent = input.validationMessage;
// }

// function setSubmitButton(button, state) { // Отвечает за смену стилизации кнопки

// }

// function handleValidateInput(evt) {// Функция которая проверяет соответсвует ли то что ввели в поля input тому что нам нужно
//   const currentForm = evt.currentTarget; // Будем находить форму в которой сейчас работаем
//   const submitButton = currentForm.querySelector('.popup__save-button') // Нашли кнопку

//   isValidField(evt.target);

//   if (currentForm.checkValidity()) {
//     setSubmitButton(submitButton, true) 
//   } else {
//     setSubmitButton(submitButton, false) 
//   }
// }


// function sendForm(evt) { // Функция проверяет прошла форма валидацию или нет
//   evt.preventDefault(); // Отменяю стандартную перезагрузку страницы после отправки формы

//   const currentForm = evt.target; // Будем находить форму в которой сейчас работаем

//   if (currentForm.checkValidity()) {  // Проверяю форму на валидность, chackValidity выдаст true или false
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

// const popupContainer = document.querySelector('.popup__container');

// // Закрытие попапа кликом на оверлей

// function overlayClose(popup) {
//   popup.addEventListener('click', (evt) => {
//     const popupContainer = evt.currentTarget
//     console.log(evt.target);
//     console.log(popupContainer);
//     console.log(evt.target !=== popupContainer)
//     if (evt.target === popupContainer) {
//       closePopup(popup)
//     }
//   })
// }

// popupArray.forEach((popup) => {
//   overlayClose(popup);
// })