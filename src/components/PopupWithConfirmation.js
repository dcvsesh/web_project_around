import Popup from "./popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector(".form");
  }

  open() {
    super.open();
  }

  setAction(confirmation) {
    this._confirmation = confirmation;
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form
      .querySelector(".confirmation__button")
      .addEventListener("click", () => {
        this._confirmation();
        this.close();
      });
  }
}
