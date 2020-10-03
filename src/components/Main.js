import React from 'react';
import editButtonImage from '../images/Edit-button__pen.svg';
import deleteCardButton from '../images/Delete-button.svg'
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main (props) {

    const [cards, setCards] = React.useState([]);

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect (() => {
        api.getInitialCards('/cards')
        .then ((value) => {
            const initialCards = value;
            setCards(initialCards);
        })
        .catch(err => console.log(err));
    }, []
    );

    function handleCardLike(card) {
        const isLiked = card.likes.some (i => i._id === currentUser._id);

        api.changeLikeCardStatus('/cards/likes', card._id, isLiked)
        .then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
        });
    }

    function handleCardDelete(card) {
        api.deleteCard('/cards', card)
        .then(() => {
            const newCards = cards.filter(c => c._id !== card._id);
            setCards(newCards);
        })
    }

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

                        {cards.length ?
                        cards.map (card => (
                            <Card key={card._id} card={card} deleteCardButton={deleteCardButton} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
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