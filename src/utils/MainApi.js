import { BASE_URL } from "./constants";

class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    //валидация ответа
    _validateQuery(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    register({ name, email, password }) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, email, password })
        })
            .then(this._validateQuery.bind(this))
    }

    login({ email, password }) {
        return fetch(`${this._baseUrl}/signin`,
            {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({ email, password })
            })
            .then(this._validateQuery.bind(this))
    }

    getUserInfo(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
                .then(this._validateQuery.bind(this))
        })
    }

    //изменение информации пользователя
    setUserInfo(token, data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        }).then(this._validateQuery.bind(this))
    }

    saveMovie(movie, token) {
        return fetch(`${this._baseUrl}/movies/${movie._id}` , {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            })
            .then(this._validateQuery.bind(this));
    }

    deleteMovie(movie, token) {
        return fetch(`${this._baseUrl}/movies/${movie._id}` , {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            })
            .then(this._validateQuery.bind(this));
    }

    getSavedMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        .then(this._validateQuery.bind(this));
    }

}

const mainApi = new MainApi({
    baseUrl: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default mainApi;