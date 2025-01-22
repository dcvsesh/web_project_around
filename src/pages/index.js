import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

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
  popupConfirmation,
  profileAvatar,
  popupProfileAvatar,
  popupAvatarButton,
  buttonSubmit,
} from "../script/utils.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/popupWithImage.js";

import Api from "../components/Api.js";

const formConfig = {
  formSelector: ".form",
  inputSelector: ".input__text",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};
/*
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
/*
/*APIs*/
const api = new Api("https://around-api.es.tripleten-services.com/v1/", {
  authorization: "aea1b549-3e28-49a7-a9aa-cb0f9b01ad47",
  "Content-Type": "application/json",
});

api.getUserInfo().then((data) => {
  userInfo.setUserInfo(data.name, data.about);
  profileAvatar.src = data.avatar;
});

/* Popup de Confirmación */
const confirmationPopup = new PopupWithConfirmation(popupConfirmation);
confirmationPopup.setEventListeners();

/* Targetas iniciales*/
api.getInitialCards().then((data) => {
  const cardList = new Section({
    items: data,
    renderer: (item) => {
      const card = new Card(item.name, item.link, ".cards__template", {
        handleCardClick: () => {
          popupOfImage.open(item.name, item.link);
        },
        /* Eliminar targetas*/
        handlerDelete: () => {
          confirmationPopup.open();
          confirmationPopup.setAction(() => {
            api.deleteCard(item._id).then(() => {
              card.handlerDelete();
            });
          });
        },
        /*Poner Likes*/
        handlerLike: () => {
          api.likeCard(item._id);
        },
        /* Quitar likes*/
        handlerDislike: () => {
          api.dislikeCard(item._id);
        },
      });
      cardArea.append(card.createCard());
    },
  });
  cardList.renderer();
});

/*Agregar nuevas targetas*/
const popupAddImage = new PopupWithForm(popupAdd, (inputValues) => {
  api.createCard(inputValues.place, inputValues.link).then((data) => {
    const card = new Card(
      inputValues.place,
      inputValues.link,
      ".cards__template",
      {
        handleCardClick: () => {
          popupOfImage.open(inputValues.place, inputValues.link);
        },
        /* Eliminar targetas*/
        handlerDelete: () => {
          confirmationPopup.open();
          confirmationPopup.setAction(() => {
            api.deleteCard(data._id).then(() => {
              card.handlerDelete();
            });
          });
        },
        /*Poner Likes*/
        handlerLike: () => {
          api.likeCard(data._id);
        },
        /* Quitar likes*/
        handlerDislike: () => {
          api.dislikeCard(data._id);
        },
      }
    );
    cardArea.prepend(card.createCard());
  });
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
  api.editUser(inputValues.name, inputValues.about).then((data) => {
    userInfo.setUserInfo(data.name, data.about);
    buttonSubmit.textContent = "Guardando...";
    editProfile.close();
  });
});

editProfile.setEventListeners();

popupButton.addEventListener("click", () => {
  editProfile.open();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.username;
  jobInput.value = userData.job;
});

/*Popup Avatar*/
const popupAvatar = new PopupWithForm(popupProfileAvatar, (inputValues) => {
  api.profileImage(inputValues.avatar).then((data) => {
    console.log(data);
    profileAvatar.src = data.avatar;
    popupAvatar.close();
  });
});
popupAvatar.setEventListeners();

popupAvatarButton.addEventListener("click", () => {
  popupAvatar.open();
});

/* formulario */
const formValidatorProfile = new FormValidator(formConfig, ".popup__form");
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(formConfig, ".popup__add__form");
formValidatorCard.enableValidation();
