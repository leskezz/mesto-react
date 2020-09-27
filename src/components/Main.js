import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import Card from './Card.js'

function Main (props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect (() => {
        Promise.all([
            api.getUserData('/users/me'),
            api.getInitialCards('/cards')
        ])
        .then ((values) => {
            const [userData, initialCards] = values;
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(initialCards);
        })
        .catch(err => console.log(err));
    }, []
    );

    return (
        <>
            <main className="content">

                <section className="profile">

                    <div className="profile__avatar">
                        <button type="button" className="profile__photo-edit" onClick={props.onEditAvatar}>
                            <img src={userAvatar} className="profile__photo" alt="Фото профиля" />
                        </button>
                            <div className="profile__info">
                                <div className="profile__heading">
                                    <h1 className="profile__name">{userName}</h1>
                                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile}>
                                        <img src={props.editButtonImage} className="profile__edit-image" alt="Правка" />
                                    </button>
                                </div>
                                <p className="profile__profession">{userDescription}</p>
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
                            <Card key={card._id} card={card} deleteCardButton={props.deleteCardButton} onCardClick={props.onCardClick} />
                        ))
                        : 
                        <li className='element element_empty'>Здесь пока ничего нет</li>                    
                        }

                    </ul>

                </section>

            </main>

            <PopupWithForm name='edit-profile' title='Редактировать профиль' buttonName='Сохранить' closeButtonImage={props.addButtonImage} isOpen={props.isEditProfilePopupOpen} onClose={props.closeAllPopups}>
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

            <PopupWithForm name='add-element' title='Новое место' buttonName='Создать' closeButtonImage={props.addButtonImage} isOpen={props.isAddPlacePopupOpen} onClose={props.closeAllPopups}>
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

            <PopupWithForm name='edit-avatar' title='Обновить аватар' buttonName='Сохранить' closeButtonImage={props.addButtonImage} isOpen={props.isEditAvatarPopupOpen} onClose={props.closeAllPopups}>
                <fieldset className="popup__inputs-container">
                    <label className ="popup__input-container">
                        <input id="input__link" type="url" className="popup__item popup__item_el_link" placeholder="Ссылка на картинку" name="avatar" required />
                        <span id="input__link-error" className="popup__input-error"></span>
                    </label>
                </fieldset>
            </PopupWithForm>

            <PopupWithForm name='delete-element' title='Вы уверены?' buttonName='Да' closeButtonImage={props.addButtonImage} onClose={props.closeAllPopups} />

            <ImagePopup closeButtonImage={props.addButtonImage} onClose={props.closeAllPopups} card={props.selectedCard} isOpen={props.isCardImagePopupOpen} />

        </>
    )
};

export default Main;