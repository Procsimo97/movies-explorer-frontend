export default function AboutProject() {
    return (
        <section className="about">

            <div className="container_with-line">
                <h2 className="about__title">О проекте</h2>
            </div>

            <div className="container">
                <div className="about__text">
                    <h2 className="about__title">Дипломный проект включал 5 этапов</h2>
                    <p className="about__paragrapf">Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__text">
                    <h2 className="about__title">На выполнение диплома ушло 5 недель</h2>
                    <p className="about__paragrapf">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
                        чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="container timing-block">
                <p className="timing-block__text timing-block__text_black-color">1 неделя</p>
                <p className="timing-block__text timing-block__text_gray-color">4 недели</p>
                <p className="timing-block__text">Back-end</p>
                <p className="timing-block__text">Front-end</p>
            </div>

        </section>
    )
}