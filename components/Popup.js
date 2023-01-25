export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector); // Селектор контейнера, куда нужно вставить этот текст:
    }


    open() {
        this._popupSelector.classList.add('popup_opened');
        this._handleEscClose();
    }


    close() {  
        this._popupSelector.classList.remove('popup_opened');
    }


    _handleEscClose() {
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                this.close();
            }
        })
    }


    _handleClosePopupByOverlay() {
            // console.log(this._popupSelector);
            // console.log(evt.target !== popupContainer) // Условие, что объектом клика является не сама форма
            if (evt.target === evt.currentTarget) {
              this.close();
            }
    };
    


    /** Добавляет слушатель клика иконке закрытия попапа */
    setEventListeners() {
        const popupCloseButton = this._popupSelector.querySelector('.popup__close-button');
        popupCloseButton.addEventListener('click', () => this.close());

        // const popupOverlay = this._popupSelector.querySelectorAll('.popup');
        // popupOverlay.addEventListener('click', (evt) => 
        // this._handleClosePopupByOverlay(evt));
    }
}
/** Закрытие по клику на overlay */
// const popupList = Array.from(document.querySelectorAll('.popup'));
//   popupList.forEach((popup) => {bindOverlayClickHandler(popup); 
// });

 
// /** Вешает обработчики событий на оверлеи */
// function bindOverlayClickHandler (popup) {
//   popup.addEventListener('click', (evt) => {
//     const popupContainer = evt.currentTarget
//     // console.log(evt.target !== popupContainer) // Условие, что объектом клика является не сама форма
//     if (evt.target === popupContainer) {
//       closeModal(popup)
//     }
//   })
// };