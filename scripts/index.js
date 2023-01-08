'use strict'

// ----------------------------Модальное окно---------------------------------------------

const modalProfile = document.querySelector('#popup-profile'),
  formProfile = document.querySelector('#form-profile'),
  buttonOpenModalProfile = document.querySelector('.profile__edit-button'),
  nameInput = modalProfile.querySelector('.popup__input_type_name'),
  jobInput = modalProfile.querySelector('.popup__input_type_job'),
  nameProfile = document.querySelector('.profile__name'),
  jobProfile = document.querySelector('.profile__job'),
  closeButtons = document.querySelectorAll('.popup__close-btn');

function openModal(modalName) {
  modalName.classList.add('popup_opened');
}
function closeModal(modalName) {
  modalName.classList.remove('popup_opened');
}

buttonOpenModalProfile.addEventListener('click', () => {
  openModal(modalProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closeModal(popup));
});

function handleFormProfileSubmit(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeModal(modalProfile);
}

formProfile.addEventListener('submit', handleFormProfileSubmit);

// -----------------5 Спринт-------------------------------------------------------------

const initialCards = [
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Сочи',
    link: 'https://images.unsplash.com/photo-1589783383891-585baca1e191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Нижний Новгород',
    link: 'https://images.unsplash.com/photo-1642318507562-f669802d0f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1554844344-c34ea04258c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
  },
  {
    name: 'Казань',
    link: 'https://images.unsplash.com/photo-1504615458222-979e04d69a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
  },
  {
    name: 'Владивосток',
    link: 'https://images.unsplash.com/photo-1634545042913-fd935f23b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  }
];

// ------------------------------------------------------------------------------------

const modalCards = document.querySelector('#popup-cards'),
  formCards = document.querySelector('#form-cards'),
  cardTemplate = document.querySelector('#card-template').content,
  cardItems = document.querySelector('.cards__items'),
  buttonOpenModalCards = document.querySelector('.profile__add-button'),
  nameCardInput = modalCards.querySelector('#name-cards__input'),
  linkCardInput = modalCards.querySelector('#link-cards__input'),
  modalImage = document.querySelector('#popup-image'),
  imageCard = modalImage.querySelector('.popup__image'),
  descriptionCard = modalImage.querySelector('.popup__description');


buttonOpenModalCards.addEventListener('click', () => {
  openModal(modalCards);
});

//-------Клонирование карточки-----------------------------------------------

function createCard(card) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);

  cardElement.querySelector('.cards__text').textContent = card.name;
  cardElement.querySelector('.cards__image').alt = card.name;
  cardElement.querySelector('.cards__image').src = card.link;

  // лайки
  cardElement.querySelector('.cards__like').addEventListener('click', function(e) {
      e.target.classList.toggle('cards__like_active');
  })
  // удаление
  cardElement.querySelector('.cards__remove-icon').addEventListener('click', function(e) {
    e.target.closest('.cards__item').remove();
  })

  function zoomImage() {
    imageCard.src = card.link;
    imageCard.alt = card.name;
    descriptionCard.textContent = card.name;
    openModal(modalImage);
  }
  cardElement.querySelector('.cards__image-container').addEventListener('click', zoomImage);

  return cardElement;
}

// -------------Загрузка карточек при старте-------------------------------------------------------------

function createInitialCards() {
  initialCards.forEach((card) => {
    cardItems.append(createCard(card));
  })
}
createInitialCards();

// --------------Создание новой карточки в виде объекта и добавление на страницу-------------------------------

function handleFormCardsSubmit(e) {
  e.preventDefault();

  const newCard = {
    name: nameCardInput.value,
    link: linkCardInput.value
  };
  cardItems.prepend(createCard(newCard));

  e.target.reset()
  closeModal(modalCards);
}

formCards.addEventListener('submit', handleFormCardsSubmit);
