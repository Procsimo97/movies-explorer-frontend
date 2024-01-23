import { URL_MOVIES } from "./constants";

function validateQuery(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export async function getMovies() {
    const res = await fetch(URL_MOVIES);
    return validateQuery(res);
}