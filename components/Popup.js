export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector); // Селектор контейнера, куда нужно вставить этот текст:
        // this._handleEscUp = this._handleEscUp.bind(this);
    }


    open() {
        this._popupSelector.classList.add('popup_opened');
        // this._handleEscClose();
    }


    close() {  
        this._popupSelector.classList.remove('popup_opened');
    }


    // _handleEscClose() {
    //     document.addEventListener('keydown', (evt) => {
    //         if (evt.key === 'Escape') {
    //             this.close();
    //         }
    //     })
    // }

    _handleEscClose() {
        this._handleEscUp
    }


    _handleClosePopupOverlay(evt) {
          if (evt.target === evt.currentTarget) { // Условие, что объектом клика является не сама форма
          this.close();
        };
    }
    
    
    setEventListeners() {
        // const popupCloseButton = this._popupSelector.querySelector('.popup__close-button');
        // popupCloseButton.addEventListener('click', () => this.close());
        document.addEventListener('click', () => this.close());

        this._popupSelector.addEventListener('click', (evt) =>
          this._handleClosePopupOverlay(evt))

           
        // this._popupSelector.addEventListener('click', (evt) => {
        //   if (evt.target === evt.currentTarget) { 
        //     this.close();
        //   }
        // });
    };
};