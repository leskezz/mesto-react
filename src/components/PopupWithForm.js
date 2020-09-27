import React from 'react';

function PopupWithForm (props) {

    return (

        <section className={`popup popup_btn_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>

            <form name ={props.name} className="popup__form" noValidate>

                <h3 className="popup__heading">{props.title}</h3>
                    
                {props.children}

                <button type="submit" className="popup__save-button">{props.buttonName}</button>
                    
                <button type="button" className="popup__close-button" onClick={props.onClose}>
                    <img src={props.closeButtonImage} className="popup__close-image" alt="Закрыть" />
                </button>

            </form>

        </section>
    )

};

export default PopupWithForm;