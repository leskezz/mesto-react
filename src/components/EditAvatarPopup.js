import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditAvatarPopup(props) {

    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm name='edit-avatar' title='Обновить аватар' buttonName='Сохранить' closeButtonImage={props.closeButtonImage} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <fieldset className="popup__inputs-container">
                <label className ="popup__input-container">
                    <input ref={avatarRef} id="input__link" type="url" className="popup__item popup__item_el_link" placeholder="Ссылка на картинку" name="avatar" required />
                    <span id="input__link-error" className="popup__input-error"></span>
                </label>
            </fieldset>
        </PopupWithForm>
    )

}

export default EditAvatarPopup;