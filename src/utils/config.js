export const REQUEST_MESSAGE = {
    ERROR_500: 'На сервере произошла ошибка',
    ERROR_REGISTER_409: 'Пользователь с таким email уже существует.',
    ERROR_REGISTER: 'При регистрации пользователя произошла ошибка.',

    ERROR_LOGIN_401: 'Вы  ввели неправильный логин или пароль.',
    ERROR_LOGIN_404: 'При авторизации произошла ошибка. Токен  не передан или передан не в том формате.',
    ERROR_LOGIN_400: 'При авторизации произошла ошибка. Переданный токен некорректен.',
    
    ERROR_PROFILE_409: 'Пользователь с таким email уже существует.',
    ERROR_PROFILE_500: 'При обновлении профиля произошла ошибка.',
    PROFILE_SUCCESSULLY: 'Сохранено!',
}