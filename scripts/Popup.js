export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }


    open() {
        this._popupSelector.classList.add('popup_opened');
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
        this._popupSelector.addEventListener('click', (evt) => {
            // console.log(this._popupSelector);
            const popupContainer = evt.currentTarget
            // console.log(evt.target !== popupContainer) // Условие, что объектом клика является не сама форма
            if (evt.target === popupContainer) {
              this.close();
            }
        })
    };
    


    /** Добавляет слушатель клика иконке закрытия попапа */
    setEventListeners() {
        const popupCloseButton = this._popupSelector.querySelector('.popup__close-button');
        // console.log(popupCloseButton);
        console.log(this._popupSelector);
        popupCloseButton.addEventListener('click', () => this.close());
        console.log(popupCloseButton);
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


// /** Функция открытия popup */
// export function openModal(modalWindow) { // Открывает модальное окно
//     modalWindow.classList.add('popup_opened');
//     document.addEventListener('keydown', closeByEsc);
//   }
  
  
//   /** Функция закрытия popup */
//   export function closeModal(modalWindow) {
//     modalWindow.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closeByEsc);
//   }
  
  
//   /** Функция закрытия form по нажатию esc */
//   function closeByEsc(event) {
//     if (event.key === 'Escape') {
//       const popupToClose = document.querySelector('.popup_opened');
//       closeModal(popupToClose);
//     }
//   }

// /** Запускаю функции открытия и закрытия popup */
// buttonOpenFormEdit.addEventListener('click', () => {
//     openModal(profileFormModalWindow); // Запускаю функцию openModal
//   });
  
//   buttonOpenFormAddCard.addEventListener('click', () => {
//     openModal(cardFormModalWindow); // Запускаю функцию openModal
//     newAddCardProfileValidator.disableSubmitButton();
//   });
  
//   buttonCloseFormEdit.addEventListener('click', () => {
//     closeModal(profileFormModalWindow); // Запускаю функцию closeModal
//   });
  
//   buttonCloseFormAddCard.addEventListener('click', () => {
//     closeModal(cardFormModalWindow); // Запускаю функцию closeModal
//   });
  
//   buttonCloseImageModal.addEventListener('click', () => { 
//     closeModal(imageModalWindow); // Запускаю функцию closeModal 
//   }); 