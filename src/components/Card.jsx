export function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }
  return (
    <>
      <button className='card__delete' type='button'></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className='card__image'
        onClick={handleCardClick}
      />
      <div className='card__description'>
        <h2 className='card__title'>{props.card.name}</h2>
        <div className='card__like-container'>
          <button className='card__like' type='button'>
            нравится
          </button>
          <span className='card__like-counter'>{props.card.likes.length}</span>
        </div>
      </div>
    </>
  );
}
