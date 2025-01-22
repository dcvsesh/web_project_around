import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupSelector.querySelector(".form");
  }

  _getInputValues() {
    const inputvalues = {};

    Array.from(this._form.querySelectorAll("input")).forEach((input) => {
      inputvalues[input.name] = input.value;
    });
    return inputvalues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
    this._form.querySelector(".button_submit").textContent = "Guardar";
  }
}
