import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function Main (props) {

    function handleEditAvatarClick() {
        document.querySelector('.popup_btn_edit-avatar').classList.add('popup_opened');
    };

    function handleEditProfileClick() {
        document.querySelector('.popup_btn_edit-profile').classList.add('popup_opened');
    };

    function handleAddPlaceClick () {
        document.querySelector('.popup_btn_add-element').classList.add('popup_opened');
    };

    return (
        <>
            <main className="content">

                <section className="profile">

                    <div className="profile__avatar">
                        <button type="button" className="profile__photo-edit" onClick={handleEditAvatarClick}>
                            <img src="#" className="profile__photo" alt="Фото профиля" />
                        </button>
                            <div className="profile__info">
                                <div className="profile__heading">
                                    <h1 className="profile__name"></h1>
                                    <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}>
                                        <img src={props.editButtonImage} className="profile__edit-image" alt="Правка" />
                                    </button>
                                </div>
                                <p className="profile__profession"></p>
                            </div>

                    </div>
                        <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}>
                            <img src={props.addButtonImage} className="profile__add-image" alt="Добавить" />
                        </button>

                </ section>

                <section className="elements">

                    <ul className="elements__grid">
                        
                        <li className='element element_empty'>Здесь пока ничего нет</li>

                    </ul>

                </section>

            </main>

            <PopupWithForm name='edit-profile' title='Редактировать профиль' buttonName='Сохранить' closeButtonImage={props.addButtonImage}>
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

            <PopupWithForm name='add-element' title='Новое место' buttonName='Создать' closeButtonImage={props.addButtonImage}>
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

            <PopupWithForm name='edit-avatar' title='Обновить аватар' buttonName='Сохранить' closeButtonImage={props.addButtonImage}>
                <fieldset className="popup__inputs-container">
                    <label className ="popup__input-container">
                        <input id="input__link" type="url" className="popup__item popup__item_el_link" placeholder="Ссылка на картинку" name="avatar" required />
                        <span id="input__link-error" className="popup__input-error"></span>
                    </label>
                </fieldset>
            </PopupWithForm>

            <PopupWithForm name='delete-element' title='Вы уверены?' buttonName='Да' closeButtonImage={props.addButtonImage} />

            <section className="popup popup_btn_card-image">
                <div className='card-full-size'>
                    <img className='card-full-size__image' src='#' alt='' />
                    <h3 className='card-full-size__heading'>
                    </h3>
                    <button type="button" className="popup__close-button">
                        <img src="./images/Add-button__plus.svg" className="popup__close-image" alt="Закрыть" />
                    </button>
                </div>
            </section>

        </>
    )
};

export default Main;