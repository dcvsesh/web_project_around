// Busquemos el formulario en el DOM
let container = document.querySelector(".page");
let formElement = document.querySelector(".form");
let popupButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__button-close");
let popupSave = document.querySelector(".popup__form-button");

function openPopup() {
  popup.classList.add("popup_opened");
}

popupButton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_opened");
}
popupClose.addEventListener("click", closePopup);

let nameInput = document.querySelector(".input__text_name");
let jobInput = document.querySelector(".input__text_about");
let profileName = document.querySelector(".profile__info_title");
let profileJob = document.querySelector(".profile__info_subtitle");

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  popupSave.addEventListener("click", closePopup);
}

formElement.addEventListener("submit", handleProfileFormSubmit);
