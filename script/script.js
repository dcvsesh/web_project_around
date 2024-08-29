//DOM
const container = document.querySelector(".page");
const popup = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup__profile");

const popupButton = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__button-close");
const popupSave = document.querySelector(".popup__form-button");
const formProfile = popupProfile.querySelector(".form");
const nameInput = document.querySelector(".input__text_name");
const jobInput = document.querySelector(".input__text_about");
const profileName = document.querySelector(".profile__info_title");
const profileJob = document.querySelector(".profile__info_subtitle");
const cardTemplate = document.querySelector(".cards__template").content;
const cardArea = document.querySelector(".cards__content");
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
const popupImage = document.querySelector(".popup__image");
const popupImageClose = document.querySelector(".popup__image_button-close");
const popupImageContent = document.querySelector(".popup__image_image");
const popupImageText = document.querySelector(".popup__image_name");

const popupAdd = document.querySelector(".popup__add");
const popupAddButton = document.querySelector(".profile__add-button");
const popupAddClose = document.querySelector(".popup__add__button-close");
const popupAddSave = document.querySelector(".popup__add__form-button");
const placeInput = document.querySelector(".input__text_place");
const linkInput = document.querySelector(".input__text_link");
const formAdd = document.querySelector(".popup__add__form");

//POP UP para editar perfil
function OpenPopupProfile() {
  popupProfile.classList.add("popup_opened");
}
function ClosePopupProfile() {
  popupProfile.classList.remove("popup_opened");
}
popupButton.addEventListener("click", OpenPopupProfile);
popupClose.addEventListener("click", ClosePopupProfile);

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  ClosePopupProfile();
});

//Tarjetas
function createCard(name, link) {
  const card = cardTemplate.querySelector(".cards__item").cloneNode(true);
  const cardImage = card.querySelector(".cards__image");
  const cardName = card.querySelector(".cards__image-text");
  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = `imagen de ${name} `;

  //Like a las tarjetas
  card
    .querySelector(".cards__hearth-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("cards__hearth-button_active");
    });

  //Eliminar tarjeta
  card
    .querySelector(".cards__trash-button")
    .addEventListener("click", function (evt) {
      card.remove();
    });

  //Popup de tarjetas
  cardImage.addEventListener("click", () => {
    popupImageContent.src = link;
    popupImageContent.alt = "imagen de ${name}";
    popupImageText.textContent = name;
    popupImage.classList.add("popup__image_opened");
  });

  cardArea.prepend(card);
}
//Abrir Popup Agregar Tarjetas
function OpenPopupAdd() {
  popupAdd.classList.add("popup__add_opened");
}
popupAddButton.addEventListener("click", OpenPopupAdd);

//Cerrar Popup Agregar Tarjetas
function ClosePopupAdd() {
  popupAdd.classList.remove("popup__add_opened");
  placeInput.value = "";
  linkInput.value = "";
}
popupAddClose.addEventListener("click", ClosePopupAdd);

//Agregar tarjeta con los datos que el usuario puso cuando le de en el boton crear
formAdd.addEventListener("submit", function (evt) {
  evt.preventDefault();
  createCard(placeInput.value, linkInput.value);
  ClosePopupAdd();
});

//Cerrar Popup Imagen de Tarjeta
function ClosePopupImage() {
  popupImage.classList.remove("popup__image_opened");
}
popupImageClose.addEventListener("click", ClosePopupImage);

initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});

//Cerrar al hacer clic fuera
function closePopups() {
  popupProfile.classList.remove("popup_opened");
  popupAdd.classList.remove("popup__add_opened");
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
