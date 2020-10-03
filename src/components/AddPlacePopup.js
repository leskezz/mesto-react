import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {

    const [place, setPlace] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangePlace(e) {
        setPlace(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: place,
            link
        });
    }

    return (
        <PopupWithForm name='add-element' title='Новое место' buttonName='Создать' closeButtonImage={props.closeButtonImage} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <fieldset className="popup__inputs-container">
                <label className ="popup__input-container">
                    <input id="input__place" type="text" value={place || ''} onChange={handleChangePlace} className="popup__item popup__item_el_place" placeholder="Название" name="name" minLength="1" maxLength="30" required />
                    <span id="input__place-error" className="popup__input-error"></span>
                </label>
                <label className ="popup__input-container">
                    <input id="input__link" type="url" value={link || ''} onChange={handleChangeLink} className="popup__item popup__item_el_link" placeholder="Ссылка на картинку" name="link" required />
                    <span id="input__link-error" className="popup__input-error"></span>
                </label>
            </fieldset>
        </PopupWithForm>
    )

}

export default AddPlacePopup;