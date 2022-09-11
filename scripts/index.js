let overlayElement = document.querySelector('.overlay')
// Нахожу и выбираю элементы по имени класса
let openEditButton = document.querySelector('.profile__edit-button')
// Нахожу кнопку открытия
let closeButton = overlayElement.querySelector('.form__close-button')
// Нахожу кнопку закрытия

let toggleOverlay = () => {
    overlayElement.classList.toggle('overlay_opened');
}
// Функция переключить overlay

openEditButton.addEventListener('click', () => {
    toggleOverlay('')
})

closeButton.addEventListener('click', () => {
    toggleOverlay('')
})
// Отслеживайте клик по кнопке методом addEventListener


// Находим форму в DOM
let formElement = document.queryCommandValue('.form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.form__author');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.form__author');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    console.log(nameInput.value);
    console.log(jobInput.value);
    // Получите значение полей jobInput и nameInput из свойства value

    let profileName = document.querySelector('');
    let profileJob = document.querySelector('');
    // Выберите элементы, куда должны быть вставлены значения полей

    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

