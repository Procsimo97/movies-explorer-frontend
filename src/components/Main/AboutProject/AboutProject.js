export default function AboutProject() {
    return (
        <section className="about" id="project">

            <div className="container container_with-line">
                <h2 className="about__title about__title_main">О проекте</h2>
            </div>

            <div className="container">
                <div className="about__text">
                    <h3 className="about__title about__title_subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__paragrapf">Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__text">
                    <h3 className="about__title about__title_subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__paragrapf">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
                        чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="timing-block">
                <p className="timing-block__text timing-block__text_black-color">1 неделя</p>
                <p className="timing-block__text timing-block__text_gray-color">4 недели</p>
                <p className="timing-block__text">Back-end</p>
                <p className="timing-block__text">Front-end</p>
            </div>

        </section>
    )
}