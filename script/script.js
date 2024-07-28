// Busquemos el formulario en el DOM
const container = document.querySelector(".page");
const formElement = document.querySelector(".form");
const popupButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__button-close");
const popupSave = document.querySelector(".popup__form-button");

function openPopup() {
  popup.classList.add("popup_opened");
}

popupButton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_opened");
}
popupClose.addEventListener("click", closePopup);

const nameInput = document.querySelector(".input__text_name");
const jobInput = document.querySelector(".input__text_about");
const profileName = document.querySelector(".profile__info_title");
const profileJob = document.querySelector(".profile__info_subtitle");

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  popupSave.addEventListener("click", closePopup);
}

formElement.addEventListener("submit", handleProfileFormSubmit);
