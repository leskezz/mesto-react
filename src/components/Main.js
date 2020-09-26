import React from 'react';

function handleEditAvatarClick () {

};

function handleEditProfileClick () {

};



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

            <section className="popup popup_btn_edit-profile">

                <form name ="formEditProfile" className="popup__form" novalidate>

                    <h3 className="popup__heading">Редактировать профиль</h3>
                    
                    <fieldset className="popup__inputs-container">
                        <label className ="popup__input-container">
                            <input id="input__name" type="text" className="popup__item popup__item_el_name" placeholder="Ваше имя" name="name" minlength="2" maxlength="40" required />
                            <span id="input__name-error" className="popup__input-error"></span>
                        </label>
                        <label className ="popup__input-container">
                            <input id="input__profession" type="text" className="popup__item popup__item_el_profession" placeholder="Ваш род занятий" name="about" minlength="2" maxlength="200" required />
                            <span id="input__profession-error" className="popup__input-error"></span>
                        </label>
                    </fieldset>

                    <button type="submit" className="popup__save-button">Сохранить</button>
                    
                    <button type="button" className="popup__close-button">
                        <img src="./images/Add-button__plus.svg" className="popup__close-image" alt="Закрыть" />
                    </button>

                </form>

                </section>

            <section className="popup popup_btn_add-element">

                <form name ="formAddElement" className="popup__form" novalidate>

                    <h3 className="popup__heading">Новое место</h3>
                    
                    <fieldset className="popup__inputs-container">
                        <label className ="popup__input-container">
                            <input id="input__place" type="text" className="popup__item popup__item_el_place" placeholder="Название" name="name" minlength="1" maxlength="30" required />
                            <span id="input__place-error" className="popup__input-error"></span>
                        </label>
                        <label className ="popup__input-container">
                            <input id="input__link" type="url" className="popup__item popup__item_el_link" placeholder="Ссылка на картинку" name="link" required />
                            <span id="input__link-error" className="popup__input-error"></span>
                        </label>
                    </fieldset>

                    <button type="submit" className="popup__save-button">Создать</button>
                    
                    <button type="button" className="popup__close-button">
                        <img src="./images/Add-button__plus.svg" className="popup__close-image" alt="Закрыть" />
                    </button>

                </form>

            </section>

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

            <section className="popup popup_btn_delete-element">

                <form name="formDeleteElement" className="popup__form" novalidate>
                    
                    <h3 className="popup__heading">Вы уверены?</h3>
                    <button type="submit" className="popup__save-button">Да</button>

                    <button type="button" className="popup__close-button">
                        <img src="./images/Add-button__plus.svg" className="popup__close-image" alt="Закрыть" />
                    </button>

                </form>

            </section>

            <section className="popup popup_btn_edit-avatar">

                <form name ="formEditAvatar" className="popup__form" novalidate>

                    <h3 className="popup__heading">Обновить аватар</h3>
                    
                    <fieldset className="popup__inputs-container">
                        <label className ="popup__input-container">
                            <input id="input__link" type="url" className="popup__item popup__item_el_link" placeholder="Ссылка на картинку" name="avatar" required />
                            <span id="input__link-error" className="popup__input-error"></span>
                        </label>
                    </fieldset>

                    <button type="submit" className="popup__save-button">Сохранить</button>
                    
                    <button type="button" className="popup__close-button">
                        <img src="./images/Add-button__plus.svg" className="popup__close-image" alt="Закрыть" />
                    </button>

                </form>

            </section>

        </>
    )
};

export default Main;