'use strict'

const openModalBtn = document.querySelector('.profile__edit-button'),
      modal = document.querySelector('.popup'),
      closeModalBtn = modal.querySelector('.popup__close-btn');

function openModal() {
  modal.classList.add('popup_opened');
}
function closeModal() {
  modal.classList.remove('popup_opened');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);