'use strict'

// ----------------------------Модальное окно---------------------------------------------

const modal = document.querySelector('.popup'),
  openModalBtn = document.querySelector('.profile__edit-button'),
  closeModalBtn = modal.querySelector('.popup__close-btn'),
  nameInput = modal.querySelector('.popup__input_type_name'),
  jobInput = modal.querySelector('.popup__input_type_job'),
  nameProfile = document.querySelector('.profile__name'),
  jobProfile = document.querySelector('.profile__job');

function openModal(modalName) {
  modalName.classList.add('popup_opened');
}
function closeModal(modalName) {
  modalName.classList.remove('popup_opened');
}

openModalBtn.addEventListener('click', () => {
  openModal(modal);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

closeModalBtn.addEventListener('click', () => {
  closeModal(modal);
});

function handleFormSubmit(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeModal(modal);
}

modal.addEventListener('submit', handleFormSubmit);

// ------------------------------------------------------------------------------

const initialCards = [
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

// ------------------------------------------------------------------------------------

const modalCards = document.querySelector('#popup-cards'),
  cardTemplate = document.querySelector('#card-template').content,
  cardItems = document.querySelector('.cards__items'),
  openModalCardsBtn = document.querySelector('.profile__add-button'),
  nameCardsInput = modalCards.querySelector('#name-cards__input'),
  linkCardsInput = modalCards.querySelector('#link-cards__input'),
  closeModalCardsBtn = modalCards.querySelector('#popup-cards__close-btn');

openModalCardsBtn.addEventListener('click', () => {
  openModal(modalCards);
});

closeModalCardsBtn.addEventListener('click', () => {
  closeModal(modalCards);
});

//-------Клонирование карточки-----------------------------------------------

function createCard(card) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);

  cardElement.querySelector('.cards__text').textContent = card.name;
  cardElement.querySelector('.cards__image').src = card.link;

  // // лайки
  // cardElement.querySelector('.cards__like').addEventListener('click', function(e) {
  //     e.target.classList.toggle('cards__like_active');
  // })
  // // удаление
  // cardElement.querySelector('.cards__remove-icon').addEventListener('click', function(e) {
  //   e.target.closest('.cards__item').remove();
  // })

  return cardElement;
}

// -------------Загрузка карточек при старте-------------------------------------------------------------

function initialStart() {
  initialCards.forEach((card) => {
    cardItems.append(createCard(card));
  })
}
initialStart();

// --------------Создание новой карточки в виде объекта, добавление в массив и на страницу-------------------------------
const newCard = {
  name: nameCardsInput.value,
  link: linkCardsInput.value
};

function handleFormSubmitTwo(e) {
  e.preventDefault();

  initialCards.unshift(newCard);
  cardItems.prepend(createCard(initialCards[0]));

  closeModal(modalCards);
}

modalCards.addEventListener('submit', handleFormSubmitTwo);

// -------------Лайки-----------------------------------------------

function likeCard() {
  cardItems.addEventListener('click', function (e) {

    const buttonLike = cardItems.querySelectorAll('.cards__like');

    buttonLike.forEach((item) => {
      if (e.target == item) {
        item.classList.toggle('cards__like_active');
      }
    })
  })
}

likeCard();

// -----------------Удаление карточки----------------------------------------

function removeCard() {
  cardItems.addEventListener('click', function (e) {

    const buttonRemove = cardItems.querySelectorAll('.cards__remove-icon');

    buttonRemove.forEach((item) => {
      if (e.target == item) {
        e.target.closest('.cards__item').remove();
      }
    })
  })
}
removeCard()



