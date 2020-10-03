import React from 'react';
import editButtonImage from '../images/Edit-button__pen.svg';
import deleteCardButton from '../images/Delete-button.svg'
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main (props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <>
            <main className="content">

                <section className="profile">

                    <div className="profile__avatar">
                        <button type="button" className="profile__photo-edit" onClick={props.onEditAvatar}>
                            <img src={currentUser.avatar} className="profile__photo" alt="Фото профиля" />
                        </button>
                            <div className="profile__info">
                                <div className="profile__heading">
                                    <h1 className="profile__name">{currentUser.name}</h1>
                                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile}>
                                        <img src={editButtonImage} className="profile__edit-image" alt="Правка" />
                                    </button>
                                </div>
                                <p className="profile__profession">{currentUser.about}</p>
                            </div>

                    </div>
                        <button type="button" className="profile__add-button" onClick={props.onAddPlace}>
                            <img src={props.addButtonImage} className="profile__add-image" alt="Добавить" />
                        </button>

                </ section>

                <section className="elements">

                    <ul className="elements__grid">

                        {props.cards.length ?
                        props.cards.map (card => (
                            <Card key={card._id} card={card} deleteCardButton={deleteCardButton} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
                        ))
                        : 
                        <li className='element element_empty'>Здесь пока ничего нет</li>                    
                        }

                    </ul>

                </section>

            </main>

        </>
    )
}

export default Main;