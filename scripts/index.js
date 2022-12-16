'use strict'

const modal = document.querySelector('.popup'),
  openModalBtn = document.querySelector('.profile__edit-button'),
  closeModalBtn = modal.querySelector('.popup__close-btn');

function openModal() {
  modal.classList.add('popup_opened');
}
function closeModal() {
  modal.classList.remove('popup_opened');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// -----------------------------------------------------------------------------------------

const formElement = document.querySelector('.popup'),
  nameInput = formElement.querySelector('.popup__name'),
  jobInput = formElement.querySelector('.popup__job'),
  nameProfile = document.querySelector('.profile__name'),
  jobProfile = document.querySelector('.profile__job');

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);

// ------------------------------------------------------------------------------

