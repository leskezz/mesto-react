import React from 'react';
import logo from '../images/header__logo.svg';
import addButtonImage from '../images/Add-button__plus.svg';
import editButtonImage from '../images/Edit-button__pen.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


function App() {
    return (
    <div className="page">

        <Header logo={logo} />

        <Main addButtonImage={addButtonImage} editButtonImage={editButtonImage} />

        <Footer />

        </div>
    );
}

export default App;
