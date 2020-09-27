import React from 'react';
import logo from '../images/header__logo.svg';
import addButtonImage from '../images/Add-button__plus.svg';
import editButtonImage from '../images/Edit-button__pen.svg';
import deleteCardButton from '../images/Delete-button.svg'
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

        <Main addButtonImage={addButtonImage} editButtonImage={editButtonImage} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups} deleteCardButton={deleteCardButton} onCardClick={handleCardClick} selectedCard={selectedCard} isCardImagePopupOpen={isCardImagePopupOpen} />

        <Footer />

        </div>
    );
}

export default App;
