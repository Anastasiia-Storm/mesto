// class Popup {
//     constructor(popupSelector) {

//     }


//     open() {

//     }


//     close() {

//     }


//     _handleEscClose() {

//     }


//     /** Добавляет слушатель клика иконке закрытия попапа */
//     setEventListeners() {

//     }
// }

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