import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector); // Super - ссылка на род класс
        this._image = this._popup.querySelector('.popup__photo');
        this._title = this._popup.querySelector('.popup__caption');
    }


    openCardImage({ title, link }) {
      this._title.textContent = title;
      this._image.alt = title;
      this._image.src = link;
  
      super.open();
    }
  }