export function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }
  return (
    <>
      <button className='card__delete' type='button'></button>
      <img src={card.link} alt={card.name} className='card__image' onClick={handleCardClick} />
      <div className='card__description'>
        <h2 className='card__title'>{card.name}</h2>
        <div className='card__like-container'>
          <button className='card__like' type='button'>
            нравится
          </button>
          <span className='card__like-counter'>{card.likes.length}</span>
        </div>
      </div>
    </>
  );
}
