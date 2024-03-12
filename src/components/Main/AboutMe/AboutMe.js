import me from '../../../images/me.jpeg'
import arrow from '../../../images/link-icon.svg';

export default function AboutMe() {
    return (
        <section className="about-me about" id="aboutme">
            <div className="container container_with-line">
                <h2 className="about__title about__title_about-me">Студент</h2>
            </div>

            <div className="profile-info">
                <div className="profile-info__text">
                    <h3 className="profile-info__name">Анна</h3>
                    <p className="profile-info__job">Фронтенд-разработчик, 26 лет</p>
                    <div className="profile-info__container">
                        <p className="profile-info__user-info">Я родилась и живу в Иркутске,
                            закончила факультет информационной безопасности. В свободное время
                            занимаюсь творчеством, рисую картины. Люблю кататься на сноуборде
                            и коньках, а ещё увлекаюсь музыкой.
                            Недавно начала кодить и постепенно развиваюсь в этом направлении.</p>
                        <a className="link profile-info__user-info profile-info__user-info_link" href="https://github.com/Procsimo97" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>
                <img src={me} className="profile-info__photo" alt="фотография автора проекта" />
            </div>

            <div className="portfolio">
                <h2 className="portfolio__title">Портфолио</h2>
                <div className="portfolio__container">
                    <a className="link portfolio__link" href="https://github.com/Procsimo97/how-to-learn" target="_blank" rel="noreferrer">
                        Статичный сайт
                        <img className="portfolio__link-icon" src={arrow} alt="иконка стрелки" />
                    </a>
                </div>
                <div className="portfolio__container portfolio__container_border">
                    <a className="link  portfolio__link" href="https://github.com/Procsimo97/russian-travel" target="_blank" rel="noreferrer">
                        Адаптивный сайт
                        <img className="portfolio__link-icon" src={arrow} alt="иконка стрелки" />
                    </a>
                </div>
                <div className="portfolio__container portfolio__container_border">
                    <a className="link portfolio__link" href="https://github.com/Procsimo97/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
                        Одностраничное приложение
                        <img className="portfolio__link-icon" src={arrow} alt="иконка стрелки" />
                    </a>
                </div>
            </div>

        </section>
    )
}