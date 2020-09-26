import React from 'react';

function Main (props) {
    return (
        <main className="content">

            <section className="profile">

                <div className="profile__avatar">
                    <button type="button" className="profile__photo-edit">
                        <img src="#" className="profile__photo" alt="Фото профиля" />
                    </button>
                        <div className="profile__info">
                            <div className="profile__heading">
                                <h1 className="profile__name"></h1>
                                <button type="button" className="profile__edit-button">
                                    <img src={props.editButtonImage} className="profile__edit-image" alt="Правка" />
                                </button>
                            </div>
                            <p className="profile__profession"></p>
                        </div>

                </div>
                    <button type="button" className="profile__add-button">
                        <img src={props.addButtonImage} className="profile__add-image" alt="Добавить" />
                    </button>

            </ section>

            <section className="elements">

                <ul className="elements__grid">
                    
                    <li className='element element_empty'>Здесь пока ничего нет</li>

                </ul>

            </section>

        </main>
    )
};

export default Main;