export function ImagePopup(props) {
  return (
    <div
      className={`popup popup_img ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={props.onClose}
    >
      <div className='popup__image-wrap' onClick={(e) => e.stopPropagation()}>
        <button
          className='popup__close-btn'
          type='button'
          aria-label='Закрыть'
          onClick={props.onClose}
        ></button>
        <img className='popup__image' src={props.card.link} alt={props.card.name} />
        <p className='popup__text'>{props.card.name}</p>
      </div>
    </div>
  );
}
