import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector); // Super - ссылка на род класс
        this._imageModalWindow = document.querySelector('.popup_type_image');
        this._image = this._imageModalWindow.querySelector('.popup__photo');
        this._name = this._imageModalWindow.querySelector('.popup__caption');

        // this._image = this._popup.querySelector('.popup__photo');
        // this._name = this._popup.querySelector('.popup__caption');
    }


    openCardImage(name, link) {
      this._name.textContent = name;
      this._image.alt = name;
      this._image.src = link;
  
      super.open();
    }
  }