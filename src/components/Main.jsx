import { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import { Card } from './Card';

export function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserAvatar(data.avatar);
        setUserDescription(data.about);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-container' onClick={onEditAvatar}>
          <img src={userAvatar} alt='Аватар профиля' className='profile__avatar' />
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>{userName}</h1>
          <button
            className='profile__edit-button'
            type='button'
            aria-label='Редактировать'
            onClick={onEditProfile}
          ></button>
          <p className='profile__about'>{userDescription}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          aria-label='Добавить'
          onClick={onAddPlace}
        ></button>
      </section>
      <section className='cards'>
        <ul className='cards__items'>
          {cards.map((card) => {
            return (
              <li className='card' key={card._id}>
                <Card card={card} onCardClick={onCardClick} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
