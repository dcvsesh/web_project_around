export default class Card {
  constructor(
    name,
    link,
    template,
    { handleCardClick, handlerDelete, handlerLike, handlerDislike, isLiked }
  ) {
    this._name = name;
    this._link = link;
    this._template = template;
    this.handleCardClick = handleCardClick;
    this._handlerDelete = handlerDelete;
    this._handlerLike = handlerLike;
    this._handlerDislike = handlerDislike;
    this._isLiked = isLiked;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(".cards__template")
      .content.querySelector(".cards__item")
      .cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".cards__image").src = this._link;
    this._element.querySelector(
      ".cards__image"
    ).alt = `imagen de ${this._name} `;
    this._element.querySelector(".cards__image-text").textContent = this._name;
    /*Nuevo cambio para likes*/
    if (this._isLiked) {
      this._element
        .querySelector(".cards__hearth-button")
        .classList.add("cards__hearth-button_active");
    } else {
      this._element
        .querySelector(".cards__hearth-button")
        .classList.remove("cards__hearth-button_active");
    }
    return this._element;
  }

  handlerLike() {
    console.log();
    if (
      this._isLiked ||
      this._element.querySelector(".cards__hearth-button_active") != null
    ) {
      this._handlerDislike();
      this._element
        .querySelector(".cards__hearth-button")
        .classList.remove("cards__hearth-button_active");
    } else {
      this._handlerLike();
      this._element
        .querySelector(".cards__hearth-button")
        .classList.add("cards__hearth-button_active");
    }
  }

  handlerDelete() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this.handleCardClick(this._name, this._link);
      });

    this._element
      .querySelector(".cards__hearth-button")
      .addEventListener("click", () => {
        this.handlerLike();
      });

    this._element
      .querySelector(".cards__trash-button")
      .addEventListener("click", () => {
        this._handlerDelete();
      });
  }
}
