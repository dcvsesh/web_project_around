import Card from "./Card.js";
//DOM
const popupProfile = document.querySelector(".popup__profile");
const popup = document.querySelectorAll(".popup");
const popupButton = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__button-close");
const formProfile = popupProfile.querySelector(".form");
const nameInput = document.querySelector(".input__text_name");
const jobInput = document.querySelector(".input__text_about");
const profileName = document.querySelector(".profile__info_title");
const profileJob = document.querySelector(".profile__info_subtitle");
const cardArea = document.querySelector(".cards__content");
const popupImage = document.querySelector(".popup__image");
const popupImageClose = document.querySelector(".popup__image_button-close");
const popupImageContent = document.querySelector(".popup__image_image");
const popupImageText = document.querySelector(".popup__image_name");
const popupAdd = document.querySelector(".popup__add");
const popupAddButton = document.querySelector(".profile__add-button");
const popupAddClose = document.querySelector(".popup__add__button-close");
const placeInput = document.querySelector(".input__text_place");
const linkInput = document.querySelector(".input__text_link");
const formAdd = document.querySelector(".popup__add__form");

//POP UP ABRIR
function OpenPopupProfile() {
  popupProfile.classList.add("popup_opened");
}
popupButton.addEventListener("click", OpenPopupProfile);

function OpenPopupAdd() {
  popupAdd.classList.add("popup__add_opened");
}
popupAddButton.addEventListener("click", OpenPopupAdd);

//Cerrar POPUPS
popupAddClose.addEventListener("click", closePopups);

popupImageClose.addEventListener("click", closePopups);

popupClose.addEventListener("click", closePopups);

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopups();
});

//Cerrar popups y al hacer clic fuera
function closePopups() {
  popupProfile.classList.remove("popup_opened");
  popupAdd.classList.remove("popup__add_opened");
  placeInput.value = "";
  linkInput.value = "";
  popupImage.classList.remove("popup__image_opened");
  document.addEventListener("keydown", escapeHandler);
}

popup.forEach((popupElement) => {
  popupElement.addEventListener("click", (evt) => {
    if (evt.target.matches(".popup")) {
      closePopups();
    }
  });
});

//Cerrar con esc
function escapeHandler(evt) {
  if (evt.key === "Escape") {
    closePopups();
  }
}

//Agregar tarjeta con los datos que el usuario puso cuando le de en el boton crear
formAdd.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const nameValue = placeInput.value;
  const linkValue = linkInput.value;
  const card = new Card(nameValue, linkValue, ".cards__template");
  const cardElement = card.createCard();
  cardArea.prepend(cardElement);
  closePopups();
});

export { popupImage, popupImageContent, popupImageText };
