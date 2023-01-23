// import { imageElement, imageCaption, imageModalWindow } from "./constants.js";


// /** Функция открытия popup */
// export function openModal(modalWindow) { // Открывает модальное окно
//   modalWindow.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEsc);
// }


// /** Функция закрытия popup */
// export function closeModal(modalWindow) {
//   modalWindow.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEsc);
// }


// /** Функция закрытия form по нажатию esc */
// function closeByEsc(event) {
//   if (event.key === 'Escape') {
//     const popupToClose = document.querySelector('.popup_opened');
//     closeModal(popupToClose);
//   }
// }


// /** Функция открытия картинки */ 
// export function openImagePopup(item) { 
//   // Контент модального окна 
//   imageElement.alt = item.name;
//   imageElement.src = item.link;  // Картинка 
//   imageCaption.textContent = item.name;  // Подпись с картинке 
  
//   openModal(imageModalWindow); // Открыть модальное окно 
// }