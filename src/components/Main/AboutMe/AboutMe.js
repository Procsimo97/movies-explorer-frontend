import me from '../../../images/me.jpeg'
import arrow from '../../../images/link-icon.svg';

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className="container_with-line">
                <h2 className="about__title">Студент</h2>
            </div>

            <div className="profile-info">
                <div className="profile-info__text">
                    <h2 className="profile-info__name">Анна</h2>
                    <p className="profile-info__job">Фронтенд-разработчик, 26 лет</p>
                    <div className="profile-info__container">
                        <p className="profile-info__user-info">Я родилась и живу в Иркутске,
                            закончила факультет информационной безопасности. В свободное время
                            занимаюсь творчеством, рисую картины. Люблю кататься на сноуборде
                            и коньках, а ещё увлекаюсь музыкой.
                            Недавно начала кодить и постепенно развиваюсь в этом направлении.</p>
                        <p className="profile-info__user-info profile-info__user-info_link">Github</p>
                    </div>
                </div>
                <img src={me} className="profile-info__photo" alt="author" />
            </div>

            <div className="portfolio">
                <h2 className="portfolio__title">Портфолио</h2>
                <div className="portfolio__container">
                    <a className="portfoli__link" href="#end">Статичный сайт</a>
                    <img className="portfoli__link_icon" src={arrow} alt="иконка стрелки" />
                </div>
                <div className="portfolio__container">
                    <a className="portfoli__link" href="#end">Адаптивный сайт</a>
                    <img className="portfoli__link_icon" src={arrow} alt="иконка стрелки" />
                </div>
                <div className="portfolio__container">
                    <a className="portfoli__link" href="#end">Одностраничное приложение</a>
                    <img className="portfoli__link_icon" src={arrow} alt="иконка стрелки" />
                </div>
            </div>

        </section>
    )
}