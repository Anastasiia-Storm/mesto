// // Функция, которая добавляет класс с ошибкой
// const showError = (formSelector, inputSelector, settings, errorMessage) => {
//   const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`); // Значение этой переменной — ошибка, которая найдена внутри formElement.
//   inputSelector.classList.add(settings.inputErrorClass); // Добавляет красное подчеркивание
//   errorElement.textContent = errorMessage; // Так текст ошибки попадёт в нужное место.
//   errorElement.classList.add(settings.errorClass);
// };

  
  
// // Функция, которая удаляет класс с ошибкой
// const hideError = (formSelector, inputSelector) => {
//   const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
//   inputSelector.classList.remove(settings.inputErrorClass);
//   errorElement.classList.remove(settings.errorClass);
   
//   errorElement.textContent = ""; // Это скроет ошибку под полем.
// };
  
  