class FormValidator {
  constructor(validationConfig, form) {
    this._validationConfig = validationConfig;
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._form = form;
  }

  /** Функция, которая добавляет класс с ошибкой */
_showError = (inputElement, errorMessage) => { // 3 параметра: форма, поле, сообщение об ошибке.
  this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);   // Значение этой переменной — ошибка, которая найдена внутри formEl.
     
  inputElement.classList.add(this._inputErrorClass); // Добавляет красное подчеркивание
  errorElement.textContent = errorMessage; // Так текст ошибки попадёт в нужное место.
  errorElement.classList.add(this._errorClass);
  };


  /** Функция, которая удаляет класс с ошибкой */
_hideError = (inputElement) => { // 2 параметра: форма, поле.
  this._errorElement = this._form.querySelector(`#${inputElement.id}-error`); // Значение этой переменной — ошибка, которая найдена внутри formEl.
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
   
  errorElement.textContent = ""; // Это скроет ошибку под полем.
};

}

export default FormValidator;