import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description
        });
    }

    return (
        <PopupWithForm name='edit-profile' title='Редактировать профиль' buttonName='Сохранить' closeButtonImage={props.closeButtonImage} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <fieldset className="popup__inputs-container">
                <label className ="popup__input-container">
                    <input id="input__name" type="text" value={name || ''} onChange={handleChangeName} className="popup__item popup__item_el_name" placeholder="Ваше имя" name="name" minLength="2" maxLength="40" required />
                    <span id="input__name-error" className="popup__input-error"></span>
                </label>
                <label className ="popup__input-container">
                    <input id="input__profession" type="text" value={description || ''} onChange={handleChangeDescription} className="popup__item popup__item_el_profession" placeholder="Ваш род занятий" name="about" minLength="2" maxLength="200" required />
                    <span id="input__profession-error" className="popup__input-error"></span>
                </label>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditProfilePopup;