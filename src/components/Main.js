import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import { Card } from './Card';

export function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-container' onClick={onEditAvatar}>
          <img src={currentUser.avatar} alt='Аватар профиля' className='profile__avatar' />
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>{currentUser.name}</h1>
          <button
            className='profile__edit-button'
            type='button'
            aria-label='Редактировать'
            onClick={onEditProfile}
          />
          <p className='profile__about'>{currentUser.about}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          aria-label='Добавить'
          onClick={onAddPlace}
        />
      </section>
      <section className='cards'>
        <ul className='cards__items'>
          {cards.map((card) => {
            return (
              <li className='card' key={card._id}>
                <Card
                  card={card}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
