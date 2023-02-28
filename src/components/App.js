import { useState } from 'react';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(data) {
    setSelectedCard(data);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className='popup__input'
          id='popup-name_profile'
          type='text'
          placeholder='Имя'
          autoComplete='off'
          minLength='2'
          maxLength='40'
          required
        />
        <span id='popup-name_profile-error' className='error'></span>
        <input
          className='popup__input'
          id='popup-about_profile'
          type='text'
          placeholder='О вас'
          autoComplete='off'
          minLength='2'
          maxLength='200'
          required
        />
        <span id='popup-about_profile-error' className='error'></span>
      </PopupWithForm>

      <PopupWithForm
        name='place'
        title='Новое место'
        submitText={'Создать'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className='popup__input'
          id='popup-name_place'
          type='text'
          placeholder='Название'
          autoComplete='off'
          minLength='2'
          maxLength='30'
          required
        />
        <span id='popup-name_place-error' className='error'></span>
        <input
          className='popup__input'
          id='popup-about_place'
          type='url'
          placeholder='Ссылка на картинку'
          autoComplete='off'
          required
        />
        <span id='popup-about_place-error' className='error'></span>
      </PopupWithForm>

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className='popup__input'
          id='popup-name_avatar'
          type='url'
          placeholder='Ссылка на аватар'
          required
        />
        <span id='popup-name_avatar-error' className='error'></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={imagePopupOpen} onClose={closeAllPopups} />
    </>
  );
}

export default App;
