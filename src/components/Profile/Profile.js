import { useState } from "react";

export default function Profile(props) {
    /*переменная состояния редактирования профиля*/
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Анна');

    /*временные заглушки*/
    const editProfile = () => {
        setIsEditing(true);
    }

    const saveNewDataProfile = () => {
        setIsEditing(false);
    }

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    return (
        <>
        <section className="profile">
            <div className="profile-box">
                <h1 className="profile__title">Привет, {name}!</h1>
                <form className="profile__form">
                    <div className="profile__container">
                        <p className="profile__label">Имя</p>
                        <input className="profile__input"
                            id="name"
                            name="name"
                            type="text"
                            value={name || ''}
                            required
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="profile__container profile__container_border">
                        <p className="profile__label">E-mail</p>
                        <input className="profile__input"
                            id="email"
                            name="email"
                            type="text"
                            required
                        />
                    </div>
                </form>
                <p className="profile__error">При обновлении профиля произошла ошибка.</p>

                {isEditing ? (
                    <button type="submit" className="button form__btn form__btn_profile" onClick={saveNewDataProfile} >Сохранить</button>
                ) : (
                    <div className="buttons">
                        <button type="button" className="button profile__btn" onClick={editProfile}>Редактировать</button>
                        <button type="button" className="button profile__btn profile__btn_exit">Выйти из аккаунта</button>
                    </div>
                )

                }
            </div>

        </section>
        </>
    )
}