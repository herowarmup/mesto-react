export function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={props.onClose}
    >
      <div className='popup__wrap' onClick={(e) => e.stopPropagation()}>
        <button
          className='popup__close-btn'
          type='button'
          aria-label='Закрыть'
          onClick={props.onClose}
        ></button>
        <h2 className='popup__title'>{props.title}</h2>
        <form className={`popup__form popup__form-${props.name}`} name={props.name} noValidate>
          {props.children}
          <button className='popup__submit-btn' type='submit'>
            {props.submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
