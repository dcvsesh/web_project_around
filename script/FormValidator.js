export class FormValidator {
  constructor(formConfig, formSelector) {
    this.formSelector = formConfig.formSelector;
    this.inputSelector = formConfig.inputSelector;
    this.submitButtonSelector = formConfig.submitButtonSelector;
    this.inactiveButtonClass = formConfig.inactiveButtonClass;
    this.inputErrorClass = formConfig.inputErrorClass;
    this.errorClass = formConfig.errorClass;
    this._formElement = document.querySelector(formSelector);
    this._submitButton = this._formElement.querySelector(
      formConfig.submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.classList.remove(this.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList) {
    console.log(this._hasInvalidInput(inputList));
    if (this._hasInvalidInput(inputList)) {
      this._submitButton.classList.add(this.inactiveButtonClass);
      this._submitButton.setAttribute("disabled", "");
    } else {
      this._submitButton.classList.remove(this.inactiveButtonClass);
      this._submitButton.removeAttribute("disabled", "");
    }
  }

  _setEventListeners() {
    this.inputList = Array.from(
      this._formElement.querySelectorAll(this.inputSelector)
    );
    this.buttonElement = this._formElement.querySelector(
      this.submitButtonSelector
    );

    this._toggleButtonState();

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    this._setEventListeners();
  }
}
