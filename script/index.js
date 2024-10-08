import { FormValidator } from "./FormValidator.js";
import Card from "./Card.js";
const formConfig = {
  formSelector: ".form",
  inputSelector: ".input__text",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
const cardArea = document.querySelector(".cards__content");

/* Targetas */
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, ".cards__template");
  const cardElement = card.createCard();
  cardArea.prepend(cardElement);
});

/* formulario */
const formValidatorProfile = new FormValidator(formConfig, ".popup__form");
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(formConfig, ".popup__add__form");
formValidatorCard.enableValidation();
