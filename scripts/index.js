'use strict'

// ----------------------------Модальное окно---------------------------------------------

const modal = document.querySelector('.popup'),
  openModalBtn = document.querySelector('.profile__edit-button'),
  closeModalBtn = modal.querySelector('.popup__close-btn'),
  nameInput = modal.querySelector('.popup__input_type_name'),
  jobInput = modal.querySelector('.popup__input_type_job'),
  nameProfile = document.querySelector('.profile__name'),
  jobProfile = document.querySelector('.profile__job');

function openModal() {
  modal.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
function closeModal() {
  modal.classList.remove('popup_opened');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

function handleFormSubmit(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeModal();
}

modal.addEventListener('submit', handleFormSubmit);

// ------------------------------------------------------------------------------

