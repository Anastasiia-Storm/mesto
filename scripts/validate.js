/*-----------------------Функции-----------------------*/


// /** Функция, которая добавляет класс с ошибкой */
// const showError = (formElement, inputElement, errorMessage, config) => { // 3 параметра: форма, поле, сообщение об ошибке.
// const errorElement = formElement.querySelector(`#${inputElement.id}-error`);   // Значение этой переменной — ошибка, которая найдена внутри formEl.
   
//   inputElement.classList.add(config.inputErrorClass); // Добавляет красное подчеркивание
//   errorElement.textContent = errorMessage; // Так текст ошибки попадёт в нужное место.
//   errorElement.classList.add(config.errorClass);
// };


// /** Функция, которая удаляет класс с ошибкой */
// const hideError = (formElement, inputElement, config) => { // 2 параметра: форма, поле.
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // Значение этой переменной — ошибка, которая найдена внутри formEl.
//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.classList.remove(config.errorClass);
   
//   errorElement.textContent = ""; // Это скроет ошибку под полем.
// };


// /** Функция переключения кнопки */
// const toggleButtonState = (inputList, buttonElement, config) => { // InputList и buttonElement. Первый — массив полей, второй — кнопка «Сохранить, создать».
//   if (hasInvalidInput(inputList)) { // есть ли в массиве inputList невалидные поля.
//     disableSubmitButton(buttonElement, config.inactiveButtonClass);
//   } else {
//     enableSubmitButton(buttonElement, config.inactiveButtonClass);
//   }
// };


// /** Функция состояния кнопок */
// const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
//   buttonElement.classList.add(inactiveButtonClass);  
//   buttonElement.disabled = true; // Сделаем кнопку неактивной 
// };


// const enableSubmitButton = (buttonElement, inactiveButtonClass) => {
//   buttonElement.classList.remove(inactiveButtonClass);  
//   buttonElement.disabled = false; // Сделаем её активной 
// };


/** Добавляю слушатель события на все поля ввода сразу */
const inputListeners = (formElement, config) => { 
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector)); // Преобразовываю коллекцию в массив методом Array.from.
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
}; 


// /** Функция для формы */
// const enableValidation = (config) => { 
//   const formList = Array.from(document.querySelectorAll(config.formSelector)); // Создаю массив
  
//   formList.forEach((formElement) => { // Прохожу по массиву методом forEach
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     inputListeners(formElement, config);
//   })
// }; // Функция isValid найдёт на странице и обработает все формы с классом form. Теперь валидация работает для всех форм.

// enableValidation(validationConfig);


// /*-----------------------Валидация-----------------------*/


// /** Функция которая проверяет formInput на корректность введённых данных и вызывает hideError и showError */
// const checkInputValidity = (formElement, inputElement, config) => { // formElement — html-элемент формы, в которой находится проверяемое поле ввода. Он нужен для поиска элемента ошибки в форме.
//   // inputElement — проверяемое поле ввода.
//   if (!inputElement.validity.valid) { // Если поле popup__input не проходит валидацию, покажем ошибку
//   // Передадим сообщение об ошибке вторым аргументом
//     showError(formElement, inputElement, inputElement.validationMessage, config); 
//   } else {; // Если поле проходит валидацию, скроем сообщение об ошибке
//     hideError(formElement, inputElement, config);
//   }
// };
  
  
// /** Обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?» */
// const hasInvalidInput = (inputList) => { // // Функция возвращает true, если в массиве inputList есть хотя бы один невалидный input. Если все поля валидны — false.
//   // проходим по этому массиву методом some
//   return inputList.some((inputElement) => { 
//     return !inputElement.validity.valid;
//   });
// };


