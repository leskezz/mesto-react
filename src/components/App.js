import React from 'react';
import logo from '../images/header__logo.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState();
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState();
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isCardImagePopupOpen, setCardImagePopupOpen] = React.useState();

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    };

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    };

    function handleAddPlaceClick () {
        setAddPlacePopupOpen(true);
    };

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setCardImagePopupOpen(false);
        setSelectedCard({});
    };

    function handleCardClick(clickedCard) {
        setSelectedCard(clickedCard);
        setCardImagePopupOpen(true);
    }

    return (
    <div className="page">

        <Header logo={logo} />

        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups} onCardClick={handleCardClick} selectedCard={selectedCard} isCardImagePopupOpen={isCardImagePopupOpen} />

        <Footer />

        </div>
    );
}

export default App;
