import Popup from "./Popup.js";
export default class PopupWithForm extends Popup { // PopupWithForm обрабатывает формы и инпуты
    constructor(popupSelector, { submitForm }) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
    }

  
    /** Собирает данные всех полей формы. */
    _getInputValues() {
        // создаём пустой объект
        const formValues = {};
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        });

        return formValues; // возвращаем объект значений
    } 

    
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
          evt.preventDefault();

          // добавим вызов функции _handleFormSubmit
          // передадим ей объект — результат работы _getInputValues
          this._submitForm(this._getInputValues());
          this.close();
        });
    }


    close() {
        super.close();
        this._popupForm.reset();
    }
}