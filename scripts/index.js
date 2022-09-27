let popupElement = document.querySelector('.popup')
// Нахожу и выбираю элементы по имени класса
let openEditButton = document.querySelector('.profile__edit-button')
// Нахожу кнопку открытия
let closeButton = popupElement.querySelector('.popup__close-button')
// Нахожу кнопку закрытия

// Находим форму в DOM
let formElement = document.querySelector('.popup') // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_type_name') // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_type_job') // Воспользуйтесь инструментом .querySelector()
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    formElement.classList.remove('popup_opened'); 
};

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

openEditButton.addEventListener('click', function() {  // Добавить слушатель события 
  let title = document.querySelector(".profile__name");
  let about = document.querySelector(".profile__job");
  let inputName = document.querySelector(".popup__input_type_name");
  let inputJob = document.querySelector(".popup__input_type_job");
  inputName.value = title.textContent // textContent позволяет получить или перезаписать текстовое содержимое элемента.
  inputJob.value = about.textContent
  popupElement.classList.add('popup_opened')  // Присвоение класса элементу
})

closeButton.addEventListener('click', function() {
    popupElement.classList.remove('popup_opened') // Удаление класса у элемента
})
// Функция закрытия popup



// const likeElement = document.querySelector('.element__like')

// // Ставлю лайк на карточку, но ставится почему-то только на первую
// ikeElement.addEventListener('click', function (evt) { // Вешаем обработчик клика на кнопку
//   evt.target.classList.toggle(likeElement.querySelector('element__like_active')); // Добавляю класс
//   evt.target.classList.toggle('element__like_active'); // Настраиваю переключение класса
// });

// Шесть карточек «из коробки»
// При загрузке на странице должно быть 6 карточек, которые добавит JavaScript.
