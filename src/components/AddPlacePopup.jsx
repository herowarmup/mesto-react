import { useState } from 'react';
import { PopupWithForm } from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardName, setCardName] = useState('');
  const [cardLink, setCardLink] = useState('');

  function handleSetName(e) {
    setCardName(e.target.value);
  }

  function handleSetLink(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  }

  return (
    <PopupWithForm
      name='place'
      title='Новое место'
      submitText={'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        onChange={handleSetName}
      />
      <span id='popup-name_place-error' className='error'></span>
      <input
        className='popup__input'
        id='popup-about_place'
        type='url'
        placeholder='Ссылка на картинку'
        autoComplete='off'
        required
        onChange={handleSetLink}
      />
      <span id='popup-about_place-error' className='error'></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
