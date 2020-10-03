import React from 'react';
import addButtonImage from '../images/Add-button__plus.svg';
import editButtonImage from '../images/Edit-button__pen.svg';
import deleteCardButton from '../images/Delete-button.svg'
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
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
                            <img src={addButtonImage} className="profile__add-image" alt="Добавить" />
                        </button>

                </ section>

                <section className="elements">

                    <ul className="elements__grid">

                        {cards.length ?
                        cards.map (card => (
                            <Card key={card._id} card={card} deleteCardButton={deleteCardButton} onCardClick={props.onCardClick} onCardLike={handleCardLike} />
                        ))
                        : 
                        <li className='element element_empty'>Здесь пока ничего нет</li>                    
                        }

                    </ul>

                </section>

            </main>

            <PopupWithForm name='edit-profile' title='Редактировать профиль' buttonName='Сохранить' closeButtonImage={addButtonImage} isOpen={props.isEditProfilePopupOpen} onClose={props.closeAllPopups}>
                <fieldset className="popup__inputs-container">
                    <label className ="popup__input-container">
                        <input id="input__name" type="text" className="popup__item popup__item_el_name" placeholder="Ваше имя" name="name" minLength="2" maxLength="40" required />
                        <span id="input__name-error" className="popup__input-error"></span>
                    </label>
                    <label className ="popup__input-container">
                        <input id="input__profession" type="text" className="popup__item popup__item_el_profession" placeholder="Ваш род занятий" name="about" minLength="2" maxLength="200" required />
                        <span id="input__profession-error" className="popup__input-error"></span>
                    </label>
                </fieldset>
            </PopupWithForm>

            <PopupWithForm name='add-element' title='Новое место' buttonName='Создать' closeButtonImage={addButtonImage} isOpen={props.isAddPlacePopupOpen} onClose={props.closeAllPopups}>
                <fieldset className="popup__inputs-container">
                    <label className ="popup__input-container">
                        <input id="input__place" type="text" className="popup__item popup__item_el_place" placeholder="Название" name="name" minLength="1" maxLength="30" required />
                        <span id="input__place-error" className="popup__input-error"></span>
                    </label>
                    <label className ="popup__input-container">
                        <input id="input__link" type="url" className="popup__item popup__item_el_link" placeholder="Ссылка на картинку" name="link" required />
                        <span id="input__link-error" className="popup__input-error"></span>
                    </label>
                </fieldset>
            </PopupWithForm>

            <PopupWithForm name='edit-avatar' title='Обновить аватар' buttonName='Сохранить' closeButtonImage={addButtonImage} isOpen={props.isEditAvatarPopupOpen} onClose={props.closeAllPopups}>
                <fieldset className="popup__inputs-container">
                    <label className ="popup__input-container">
                        <input id="input__link" type="url" className="popup__item popup__item_el_link" placeholder="Ссылка на картинку" name="avatar" required />
                        <span id="input__link-error" className="popup__input-error"></span>
                    </label>
                </fieldset>
            </PopupWithForm>

            <PopupWithForm name='delete-element' title='Вы уверены?' buttonName='Да' closeButtonImage={addButtonImage} onClose={props.closeAllPopups} />

            <ImagePopup closeButtonImage={addButtonImage} onClose={props.closeAllPopups} card={props.selectedCard} />

        </>
    )
}

export default Main;