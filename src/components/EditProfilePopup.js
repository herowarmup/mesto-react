import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { PopupWithForm } from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, updateUserInfo }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    updateUserInfo({ name, about });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setAbout(e.target.value);
  }

  return (
    <PopupWithForm
      name='profile'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={name || ''}
        onChange={handleNameChange}
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
        value={about || ''}
        onChange={handleDescriptionChange}
      />
      <span id='popup-about_profile-error' className='error'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
