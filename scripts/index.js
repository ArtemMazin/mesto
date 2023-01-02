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

const cardTemplate = document.querySelector('#card').content,
      cardItems = document.querySelector('.cards__items'),
      initialCards = [
        {
          name: 'Архыз',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
        },
        {
          name: 'Челябинская область',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
        },
        {
          name: 'Иваново',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
        },
        {
          name: 'Камчатка',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
        },
        {
          name: 'Холмогорский район',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
        },
        {
          name: 'Байкал',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
        }
      ];

let newCard = {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}
initialCards.unshift(newCard);

initialCards.forEach((card) => {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__image').src = card.link;
  cardElement.querySelector('.cards__text').textContent = card.name;
  
  cardItems.append(cardElement); 
})



