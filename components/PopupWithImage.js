import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector); // Super - ссылка на род класс
        this._image = this._popupSelector.querySelector('.popup__photo');
        this._title = this._popupSelector.querySelector('.popup__caption');
    }


    openCardImage(item) {
      this._image.src = item.link;
      this._image.alt = item.name;
      this._title.textContent = item.name;
      super.open();
    }
}