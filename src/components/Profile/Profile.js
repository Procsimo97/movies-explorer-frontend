import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Profile(props) {
    const currentUser = useContext(CurrentUserContext);

    /*переменная состояния редактирования профиля*/
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [inputDisable, setInputDisable] = useState('disabled');

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser])

    /*временные заглушки*/
    const editProfile = () => {
        setIsEditing(true);
        setInputDisable('');
    }

    const saveNewDataProfile = () => {
        setIsEditing(false);
        setInputDisable('disabled');
    }

    function handleNameChange(evt) {
        setName(evt.target.value);
    }
    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }

    //отправка формы
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser({ name, email })
    }

    return (
        <>
        <section className="profile">
            <div className="profile-box">
                <h1 className="profile__title">Привет, {name}!</h1>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <div className="profile__container">
                        <p className="profile__label">Имя</p>
                        <input className="profile__input"
                            id="name"
                            name="name"
                            type="text"
                            value={name || ''}
                            required
                            onChange={handleNameChange}
                            disabled={inputDisable}
                        />
                    </div>
                    <div className="profile__container profile__container_border">
                        <p className="profile__label">E-mail</p>
                        <input className="profile__input"
                            id="email"
                            name="email"
                            type="text"
                            required
                            onChange={handleEmailChange}
                            disabled={inputDisable}
                        />
                    </div>
                </form>
                <p className="profile__error">При обновлении профиля произошла ошибка.</p>

                {isEditing ? (
                    <button type="submit" className="button form-btn form-btn_profile" onClick={saveNewDataProfile} >Сохранить</button>
                ) : (
                    <div className="buttons">
                        <button type="button" className="button profile__btn" onClick={editProfile}>Редактировать</button>
                        <Link to='/'>
                            <button type="button" className="button profile__btn profile__btn_exit" onClick={props.signOut}>Выйти из аккаунта</button>
                        </Link>
                    </div>
                )

                }
            </div>

        </section>
        </>
    )
}