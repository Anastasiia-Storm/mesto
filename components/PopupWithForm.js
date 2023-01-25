import Popup from "./Popup.js";
export default class PopupWithForm extends Popup { // PopupWithForm обрабатывает формы и инпуты
    constructor(popupSelector, { submitForm }) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._popupForm = this._popupSelector.querySelector('.popup__form');
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    }

  
    /** Собирает данные всех полей формы. */
    _getInputValues() {
        // создаём пустой объект
        this._formValues = {};
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(item => {
        this._formValues[item.name] = item.value;
    });
    // возвращаем объект значений
    return this._formValues;
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
    //   this._popupForm.reset();
    }
}
// function handleProfileFormSubmit (evt) {
//     evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     closeModal(profileFormModalWindow);
// }


/** Обработчик «отправки» формы, хотя пока
    она никуда отправляться не будет */
// function handleProfileFormSubmit (evt) {
//     evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.
//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     closeModal(profileFormModalWindow);
// }




// function handleAddNewCard(evt) { 
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. 
//     renderCard({name: cardNameInputValue.value, link: cardLinkInputValue.value}); 
//     closeModal(cardFormModalWindow);
//     evt.target.reset();
//   } 
  