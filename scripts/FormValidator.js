class FormValidator {
  constructor(validationConfig) {
    this._validationConfig = validationConfig;
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    // this._errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    // this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    // this._buttonElement = this._formElement.querySelector('.popup__save-button');
  }


  /** Функция, которая добавляет класс с ошибкой */
  _showError = (formElement, inputElement, errorMessage) => { // 3 параметра: форма, поле, сообщение об ошибке.
    // const errorElement = formElement.querySelector(`#${inputElement.id}-error`);   // Значение этой переменной — ошибка, которая найдена внутри formEl.
    this._errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass); // Добавляет красное подчеркивание
    this._errorElement.textContent = errorMessage; // Так текст ошибки попадёт в нужное место.
    this._errorElement.classList.add(this._errorClass);
  };
  
 
  /** Функция, которая удаляет класс с ошибкой */
  _hideError = (formElement, inputElement) => { // 2 параметра: форма, поле.
    this._errorElement = formElement.querySelector(`#${inputElement.id}-error`); // Значение этой переменной — ошибка, которая найдена внутри formEl.
   
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);

    this._errorElement.textContent = ""; // Это скроет ошибку под полем.
  };


  /** Функция переключения кнопки */
  toggleButtonState = (inputList, buttonElement) => { // InputList и buttonElement. Первый — массив полей, второй — кнопка «Сохранить, создать».
    if (hasInvalidInput(inputList)) { // есть ли в массиве inputList невалидные поля.
      disableSubmitButton(buttonElement, this._inactiveButtonClass);
    } else {
      enableSubmitButton(buttonElement, this._inactiveButtonClass);
    }
  };


  /** Функция состояния кнопок */
  _disableSubmitButton = (buttonElement) => {
    buttonElement.classList.add(this._inactiveButtonClass);  
    buttonElement.disabled = true; // Сделаем кнопку неактивной 
  };


  _enableSubmitButton = (buttonElement) => {
    buttonElement.classList.remove(this._inactiveButtonClass);  
    buttonElement.disabled = false; // Сделаем её активной 
  };


  /** Добавляю слушатель события на все поля ввода сразу */
  _inputListeners = (formElement) => { 
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector)); // Преобразовываю коллекцию в массив методом Array.from.
    const buttonElement = formElement.querySelector(this._submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }; 


  /** Функция для формы */
  enableValidation = () => { 
    const formList = Array.from(document.querySelectorAll(this._formSelector)); // Создаю массив
  
    formList.forEach((formElement) => { // Прохожу по массиву методом forEach
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._inputListeners(formElement);
    })
  }; // Функция isValid найдёт на странице и обработает все формы с классом form. Теперь валидация работает для всех форм.


  /*-----------------------Валидация-----------------------*/

  
  /** Функция которая проверяет formInput на корректность введённых данных и вызывает hideError и showError */
  _checkInputValidity = (formElement, inputElement) => { // formElement — html-элемент формы, в которой находится проверяемое поле ввода. Он нужен для поиска элемента ошибки в форме.
    // inputElement — проверяемое поле ввода.
    if (!inputElement.validity.valid) { // Если поле popup__input не проходит валидацию, покажем ошибку
    // Передадим сообщение об ошибке вторым аргументом
      this._showError(formElement, inputElement, inputElement.validationMessage); 
    } else {; // Если поле проходит валидацию, скроем сообщение об ошибке
      this._hideError(formElement, inputElement);
    }
  };

  
  /** Обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?» */
  _hasInvalidInput = (inputList) => { // // Функция возвращает true, если в массиве inputList есть хотя бы один невалидный input. Если все поля валидны — false.
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => { 
      return !inputElement.validity.valid;
    });
  };
};
 

export default FormValidator;
