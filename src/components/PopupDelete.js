import Popup from "./Popup";

export default class PopupDelete extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this._popup = document.querySelector(popupSelector)
        this.setEventListeners();
    };
    
    
    submitCallback(action) {
        this._handleFormSubmit = action;
    };
    
    
    setEventListeners() {
        super.setEventListeners();
        this._buttonDelete = this._popup.querySelector('.popup__delete-card-button')
        this._buttonDelete.addEventListener('click', () => {
            this._handleFormSubmit()
        });
    };
}