export default class UserInfo { // UserInfo получает и изменяет данные пользователя
    constructor({ name, description }) {
      this._name = name;
      this._description = description;
    }


    /** Возвращает объект с данными пользователя */
    getUserInfo() {
      this._userInfo = {
        name: this._name.textContent,
        description: this._description.textContent,
      }
      return this._userInfo;
    }

    /** Принимает новые данные пользователя и добавляет их на страницу */
    setUserInfo({ name, description }) {
        this._name.textContent = name;
        this._description.textContent = description;
    }
}
// Тут вроде все верно