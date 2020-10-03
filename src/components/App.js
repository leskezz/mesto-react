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
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';


function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect (() => {
        Promise.all([
            api.getUserData('/users/me'),
            api.getInitialCards('/cards')
        ])
        .then ((values) => {
            const [userData, initialCards] = values;
            setCards(initialCards);
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

    function handleCardLike(card) {
        const isLiked = card.likes.some (i => i._id === currentUser._id);

        api.changeLikeCardStatus('/cards/likes', card._id, isLiked)
        .then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
        })
        .catch(err => console.log(err));
    }

    function handleCardDelete(card) {
        api.deleteCard('/cards', card)
        .then(() => {
            const newCards = cards.filter(c => c._id !== card._id);
            setCards(newCards);
        })
        .catch(err => console.log(err));
    }

    function handleAddPlaceSubmit(newCard) {
        api.postNewCard('/cards', newCard)
        .then((addedCard) => {
            setCards([addedCard, ...cards]);
            closeAllPopups();
        })
        .catch(err => console.log(err));
    }

    return (
    <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
            <Header logo={logo} />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} addButtonImage={addButtonImage} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} closeButtonImage={addButtonImage} onUpdateUser={handleUpdateUser}/>
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} closeButtonImage={addButtonImage} onUpdateAvatar={handleUpdateAvatar} />
            <AddPlacePopup closeButtonImage={addButtonImage} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
            <PopupWithForm name='delete-element' title='Вы уверены?' buttonName='Да' closeButtonImage={addButtonImage} onClose={closeAllPopups} />
            <ImagePopup closeButtonImage={addButtonImage} onClose={closeAllPopups} card={selectedCard} />
        </CurrentUserContext.Provider>
    </div>
    );
}

export default App;
