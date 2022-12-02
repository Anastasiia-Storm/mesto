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