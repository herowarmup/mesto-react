import React from 'react';
import { api } from '../utils/Api';
import { Card } from './Card';

export function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserAvatar(data.avatar);
      setUserDescription(data.about);
    });
  }, []);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-container' onClick={props.onEditAvatar}>
          <img src={userAvatar} alt='Аватар профиля' className='profile__avatar' />
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>{userName}</h1>
          <button
            className='profile__edit-button'
            type='button'
            aria-label='Редактировать'
            onClick={props.onEditProfile}
          ></button>
          <p className='profile__about'>{userDescription}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          aria-label='Добавить'
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className='cards'>
        <ul className='cards__items'>
          {cards.map((card) => {
            return (
              <li className='card' key={card._id}>
                <Card card={card} onCardClick={props.onCardClick} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
