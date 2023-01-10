export const imageModalWindow = document.querySelector('.popup_type_image');

export const imageElement = document.querySelector('.popup__photo');
export const imageCaption = document.querySelector('.popup__caption');


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

