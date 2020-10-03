import React from 'react';
import logo from '../images/header__logo.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import addButtonImage from '../images/Add-button__plus.svg';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js'


function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect (() => {
        Promise.all([
            api.getUserData('/users/me'),
            api.getInitialCards('/cards')
        ])
        .then ((values) => {
            const [userData, initialCards] = values;
            setCurrentUser(userData);
        })
        .catch(err => console.log(err));
    }, []
    );

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick () {
        setAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard({});
    }

    function handleCardClick(clickedCard) {
        setSelectedCard(clickedCard);
    }

    function handleUpdateUser(newUser){
        api.patchProfile('/users/me', newUser)
        .then(newProfile => {
            setCurrentUser(newProfile);
            closeAllPopups();
        })
        .catch(err => console.log(err));
    }

    function handleUpdateAvatar(newAvatar) {
        api.patchAvatar('/users/me/avatar', newAvatar)
        .then(newProfile => {
            setCurrentUser(newProfile);
            closeAllPopups();
        })
        .catch(err => console.log(err));
    }

    return (
    <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
            <Header logo={logo} />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} addButtonImage={addButtonImage} />
            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} closeButtonImage={addButtonImage} onUpdateUser={handleUpdateUser}/>

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} closeButtonImage={addButtonImage} onUpdateAvatar={handleUpdateAvatar} />

            <PopupWithForm name='add-element' title='Новое место' buttonName='Создать' closeButtonImage={addButtonImage} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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

            <PopupWithForm name='delete-element' title='Вы уверены?' buttonName='Да' closeButtonImage={addButtonImage} onClose={closeAllPopups} />

            <ImagePopup closeButtonImage={addButtonImage} onClose={closeAllPopups} card={selectedCard} />
        </CurrentUserContext.Provider>
    </div>
    );
}

export default App;
