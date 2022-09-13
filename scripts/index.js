let popupElement = document.querySelector('.popup')
// Нахожу и выбираю элементы по имени класса
let openEditButton = document.querySelector('.profile__edit-button')
// Нахожу кнопку открытия
let closeButton = popupElement.querySelector('.popup__close-button')
// Нахожу кнопку закрытия

openEditButton.addEventListener('click', () => {
    popupElement.classList.add('popup_opened')
})
    
closeButton.addEventListener('click', () => {
    popupElement.classList.remove('popup_opened')
})


// Находим форму в DOM 
// let popupContainer = document.queryCommandValue('.popup__container');// Воспользуйтесь методом querySelector() 

// Находим поля формы в DOM 
let nameInput = document.querySelector('.popup__author');// Воспользуйтесь инструментом .querySelector() 
let jobInput = document.querySelector('.popup__description');// Воспользуйтесь инструментом .querySelector() 
let popupSaveButton = document.querySelector('.popup__save-button');

let profileName = document.querySelector('.profile__name'); 
let profileJob = document.querySelector('.profile__description'); 
// Выберите элементы, куда должны быть вставлены значения полей 
 
// Обработчик «отправки» формы, хотя пока 
// она никуда отправляться не будет 

function popupSubmitHandler (evt) { 
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. 
    // Получите значение полей jobInput и nameInput из свойства value 

    profileName.textContent = nameInput.value 
    profileJob.textContent = jobInput.value 
    // Вставьте новые значения с помощью textContent 

    // popupSaveButton.addEventListener('click', () => {
    //     popupElement.remove('popup_opened')
    // })
} 


// Прикрепляем обработчик к форме: 
// он будет следить за событием “submit” - «отправка» 
popupElement.addEventListener('submit', popupSubmitHandler);