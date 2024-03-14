## Фронтенд часть дипломного проекта Movie Explorer

Это сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете. Сайт состоит из шести страниц:

1. Главная. Содержит информацию о выполненном проекте.
2. Страница с фильмами. На ней есть форма поиска фильмов и блок с результатами поиска.
3. Страница с сохранёнными фильмами. Показывает фильмы, сохранённые пользователем.
4. Страница регистрации. Позволяет пользователю зарегистрировать аккаунт.
5. Страница авторизации. На ней пользователь может войти в систему.
6. Страница редактирования профиля. Пользователь может изменить данные своего аккаунта.
   
В данном репозитории реализована фронтенд часть данного проекта.

### Что было сделано: 
- созданы компоненты и настроена файловая структура
- сделаны необходимые роуты для маршрутизации
- сверстаны все необходимые элементы
- сделаны асинхронные GET- и POST-запросы к API
- все роуты защищены авторизацией, кроме главной страницы и страниц аутентификации и авторизации
- реализован поиск по названию фильма или его фрагменту
- настроена фильтрация данных на стороне клиента
- реазизованы авторизованные и неавторизованные состояния
- валидация происходит как на стороне клиента, так и на стороне сервера
- сделан функционал редактирования данных профиля, таких как email и имя
- добавлена возможность сохранять понравившиеся фильмы на отдельную страницу сохраненных фильмов

### Что ещё можно доработать:
  - Добавить вывод пользователю сообщение об ошибке в отдельном попапе
  - Добавить сообщение "фильмы не найдены", если при запросе не было найдено ни одного совпадения
 
### Технологический стек:
- React, JS
- HTML, CSS
- MongoDB

Также использованы такие технологии как Хуки (валидация форм, получение ширины экрана), работа с локальным хранилищем, НОС-компоненты, БЭМ.

[Ссылка на макет Figma: ](https://www.figma.com/file/6FMWkB94wE7KTkcCgUXtnC/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82?type=design&node-id=1-2798&mode=design&t=NRCaszjXqoK6AlVU-0)  
[Ссылка на бэкенд](https://github.com/Procsimo97/movies-explorer-api)  
**НА ДАННЫЙ МОМЕНТ СЕРВЕР ОТКЛЮЧЕН**

### Инструкция по запуску проекта
1. Создать новую папку  
 ` cd <имя папки>`

2. Скачать в созданную папку репозиторий  
`git clone git@github.com:Procsimo97/movies-explorer-frontend.git `

3. Установить зависимости  
`yarn или npm install`

4. Запустить фронтенд через команду `yarn или npm start`

Ссылка на сервер: procsimo.movies.nomoredomainsmonster.ru

IP адресс: 158.160.117.217
