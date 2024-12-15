import Popup from "./popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupSelector.querySelector(".popup__image_image");
    this._popupName = this._popupSelector.querySelector(".popup__image_name");
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupName.textContent = name;
    this._popupImage.alt = `imagen de ${name} `;
    super.open();
  }
}
