import { useState } from "react"

export default function Profile(props) {
    /*переменная состояния редактирования профиля*/
    const [isEditing, setIsEditing] = useState(true);

    return (
        <section className="profile">
            <h1 className="profile__title">Привет, {props.name}!</h1>
            <form className="profile__form">
                <div className="profile__container">
                    <p className="profile__label">Имя</p>
                    <input className="profile__input"
                        id="name"
                        name="name"
                        type="text"
                        value={props.name || ''}
                        required
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
                <button type="submit" className="form__btn form__btn_profile">Сохранить</button>
            ) : (
                <div className="buttons">
                    <button type="button" className="profile__btn">Редактировать</button>
                    <button type="button" className="profile__btn profile__btn_exit">Выйти из аккаунта</button>
                </div>
            )

            }

        </section>
    )
}