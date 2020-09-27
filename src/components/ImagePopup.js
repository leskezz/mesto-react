import React from 'react';

function ImagePopup (props) {
    return (
        <section className={`popup popup_btn_card-image ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className='card-full-size'>
                <img className='card-full-size__image' src={props.card.link} alt={props.card.name} />
                <h3 className='card-full-size__heading'>{props.card.name}</h3>
                <button type="button" className="popup__close-button" onClick={props.onClose}>
                    <img src={props.closeButtonImage} className="popup__close-image" alt="Закрыть" />
                </button>
            </div>
        </section>
    )
};

export default ImagePopup;