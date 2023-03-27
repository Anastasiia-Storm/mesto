export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector); // Cохраняю уже не селектор, а найденный элемент попапа 
        this._handleEscUp = this._handleEscUp.bind(this);
    }


    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscUp);
    }


    close() {  
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscUp);
    }


    _handleEscUp(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }


    _handleClosePopupOverlay(evt) {
        if (evt.target === evt.currentTarget) { 
            this.close();
        };
    }
    
    
    setEventListeners() {
        const popupCloseButton = this._popup.querySelector('.popup__close-button');
        popupCloseButton.addEventListener('click', () => this.close());
        

        this._popup.addEventListener('click', (evt) =>
          this._handleClosePopupOverlay(evt));
    };
};