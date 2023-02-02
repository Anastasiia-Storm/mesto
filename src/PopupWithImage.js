import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector); // Super - ссылка на род класс
        this._image = this._popup.querySelector('.popup__photo');
        this._title = this._popup.querySelector('.popup__caption');
    }


    openCardImage({ name, link }) {
      this._title.textContent = name;
      this._image.alt = name;
      this._image.src = link;
      super.open();
    }
}