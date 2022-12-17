'use strict'

// ----------------------------Модальное окно---------------------------------------------

const body = document.querySelector('.body'),
  modal = body.querySelector('.popup'),
  openModalBtn = body.querySelector('.profile__edit-button'),
  closeModalBtn = modal.querySelector('.popup__close-btn'),
  nameInput = modal.querySelector('.popup__name'),
  jobInput = modal.querySelector('.popup__job'),
  nameProfile = body.querySelector('.profile__name'),
  jobProfile = body.querySelector('.profile__job');


function openModal() {
  modal.classList.add('popup_opened');
  body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('popup_opened');
  body.style.overflow = '';
}

openModalBtn.addEventListener('click', openModal);

modal.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target === closeModalBtn) {
    closeModal();
  }
})

function handleFormSubmit(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeModal();
}

modal.addEventListener('submit', handleFormSubmit);

// ------------------------------------------------------------------------------

