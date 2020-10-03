import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card (props) {

    const currentUser = React.useContext(CurrentUserContext);

    function handleClick () {
        props.onCardClick(props.card)
    }

    const isLiked = props.card.likes.some (i => i._id === currentUser._id);

    return (
        <li className="element">
            <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick} />
            {props.card.owner._id !== currentUser._id && 
                <button type="button" className="element__delete-button">
                <img src={props.deleteCardButton} className='element__delete-image' alt="Удалить" />
            </button> }
            <div className="element__info">
                <h3 className="element__heading">{props.card.name}</h3>
                <div className="element__like-container">
                    <button type="button" className={`element__like-button ${isLiked && 'element__like-button_active'}`}></button>
                    <p className="element__like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;