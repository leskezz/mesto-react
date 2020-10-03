import React from 'react';
import logo from '../images/header__logo.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


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

    return (
    <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
            <Header logo={logo} />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups} onCardClick={handleCardClick} selectedCard={selectedCard} />
            <Footer />
        </CurrentUserContext.Provider>
    </div>
    );
}

export default App;
