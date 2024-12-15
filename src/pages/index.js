import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import {
  profileName,
  profileJob,
  popupProfile,
  nameInput,
  jobInput,
  popupButton,
  popupImage,
  popupAdd,
  popupAddButton,
  cardArea,
} from "../script/utils.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/popupWithImage.js";

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

/* Targetas iniciales*/
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, ".cards__template", {
        handleCardClick: () => {
          popupOfImage.open(item.name, item.link);
        },
      });
      const cardElement = card.createCard();
      cardList.addItem(cardElement);
    },
  },
  cardArea
);
cardList.renderer();

/*Agregar nuevas targetas*/
const popupAddImage = new PopupWithForm(popupAdd, (inputValues) => {
  const card = new Card(
    inputValues.place,
    inputValues.link,
    ".cards__template",
    {
      handleCardClick: () => {
        popupOfImage.open(inputValues.place, inputValues.link);
      },
    }
  );
  const cardElement = card.createCard();
  cardList.addItem(cardElement);
});
popupAddImage.setEventListeners();

popupAddButton.addEventListener("click", () => {
  popupAddImage.open();
});

/* Popup de la Imagen */
const popupOfImage = new PopupWithImage(popupImage);
popupOfImage.setEventListeners();

/* Informacion del Usuario */
const userInfo = new UserInfo({
  usernameSelector: profileName,
  jobSelector: profileJob,
});

const editProfile = new PopupWithForm(popupProfile, (inputValues) => {
  userInfo.setUserInfo(inputValues.name, inputValues.about);
  editProfile.close();
});
editProfile.setEventListeners();

popupButton.addEventListener("click", () => {
  editProfile.open();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.username;
  jobInput.value = userData.job;
});

/* formulario */
const formValidatorProfile = new FormValidator(formConfig, ".popup__form");
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(formConfig, ".popup__add__form");
formValidatorCard.enableValidation();
