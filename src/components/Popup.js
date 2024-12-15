export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    const popupCloseButton = this._popupSelector.querySelector(
      ".popup__button-close"
    );

    popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target.matches(".popup")) {
        this.close();
      }
    });
  }
}
