import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector); // Super - ссылка на род класс
        this._image = this._popupSelector.querySelector('.popup__photo');
        this._title = this._popupSelector.querySelector('.popup__caption');
    }


    handleCardClick({ name, link }) {
      this._image.src = link;
      this._image.alt = name;
      this._title.textContent = name;
      super.open();
    }
}

// /** Функция открытия картинки */ 
// export function openImagePopup(item) { 
//     // Контент модального окна 
//     imageElement.alt = item.name;
//     imageElement.src = item.link;  // Картинка 
//     imageCaption.textContent = item.name;  // Подпись с картинке 
    
//     openModal(imageModalWindow); // Открыть модальное окно 
//   }
