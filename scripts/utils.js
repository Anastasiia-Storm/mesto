export const imageModalWindow = document.querySelector('.popup_type_image');

export const imageElement = document.querySelector('.popup__photo');
export const imageCaption = document.querySelector('.popup__caption');


/** Функция закрытия popup */
export function closeModal(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}


/** Функция закрытия form по нажатию esc */
export function closeByEsc(event) {
  if (event.key === 'Escape') {
    const popupToClose = document.querySelector('.popup_opened');
    closeModal(popupToClose);
  }
}


/** Функция открытия popup */
export function openModal(modalWindow) { // Открывает модальное окно
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}


/** Функция открытия картинки */ 
export function openImagePopup(params) { 
  // Контент модального окна 
  imageElement.alt = params.name;
  imageElement.src = params.link;  // Картинка 
  imageCaption.textContent = params.name;  // Подпись с картинке 
  
  openModal(imageModalWindow); // Открыть модальное окно 
} 

