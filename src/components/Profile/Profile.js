import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/hooks/validateForms";

export default function Profile(props) {
    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

    const conditionValidity = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));
    /*переменная состояния редактирования профиля*/
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(() => {
        const name = localStorage.getItem('userInfo');
        return name ? name.name : currentUser.name });
    const [email, setEmail] = useState(() => {
        const email = localStorage.getItem('userInfo');
        return email ? JSON.parse(email).email : currentUser.email });

    const [inputDisable, setInputDisable] = useState('disabled');

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser])

    //меняет состояние кнопок
    const editProfile = () => {
        setIsEditing(true);
        setInputDisable('');
        props.setMessageStatus('');
    }

    //отправка формы
    function handleSubmit(evt) {
        evt.preventDefault();
        if (isValid) {
            setIsEditing(false);
            setInputDisable('disabled');
            props.onUpdateUser({
                name: values.name || name,
                email: values.email || email,
            })
            setName(values.name);
            setEmail(values.email);
        } else {
            return props.messageStatus;
        }
    }

    return (
        <>
            <section className="profile">
                <div className="profile-box">
                    <h1 className="profile__title">Привет, {name}!</h1>
                    <form className="profile__form" onSubmit={handleSubmit}>
                        <div className="profile__container">
                            <div className="input-container">
                                <p className="profile__label">Имя</p>
                                <input className="profile__input"
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={values.name || name || ''}
                                    required
                                    minLength='2'
                                    maxLength='40'
                                    onChange={handleChange}
                                    disabled={inputDisable}
                                />
                                
                            </div>
                            <span className="profile__input-error">{errors.name}</span>
                        </div>
                        <div className="profile__container profile__container_border">
                            <div className="input-container">
                                <p className="profile__label">E-mail</p>
                                <input className="profile__input"
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={values.email || email || ''}
                                    required
                                    onChange={handleChange}
                                    disabled={inputDisable}
                                />
                            </div>
                            <span className="profile__input-error">{errors.email}</span>
                        </div>

                        {isEditing ? (
                            <button type="submit"
                                className={conditionValidity ? "form-btn form-btn_profile form-btn_disabled" : "button form-btn form-btn_profile"}
                                disabled={conditionValidity ? true : false}>{props.isLoading ? 'Сохранение ...' : 'Сохранить'}</button>
                        ) : (
                            <div className="buttons">
                                <button type="button" className="button profile__btn" onClick={editProfile}>Редактировать</button>
                                <Link to='/'>
                                    <button type="button" className="button profile__btn profile__btn_exit" onClick={props.signOut}>Выйти из аккаунта</button>
                                </Link>
                            </div>
                        )

                        }
                    </form>
                    <p className={props.messageStatus ? 'profile__error profile__error_active' : 'profile__error profile__error_active '}>{props.messageStatus}</p>

                </div>

            </section>
        </>
    )
}