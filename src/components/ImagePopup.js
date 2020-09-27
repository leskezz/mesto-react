import React from 'react';

function ImagePopup (props) {
    return (
        <section className="popup popup_btn_card-image">
            <div className='card-full-size'>
                <img className='card-full-size__image' src='#' alt='' />
                <h3 className='card-full-size__heading'>
                </h3>
                <button type="button" className="popup__close-button" onClick={props.onClose}>
                    <img src={props.closeButtonImage} className="popup__close-image" alt="Закрыть" />
                </button>
            </div>
        </section>
    )
};

export default ImagePopup;