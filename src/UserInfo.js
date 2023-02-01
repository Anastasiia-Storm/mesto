export default class UserInfo { // UserInfo получает и изменяет данные пользователя
    constructor({ name, job }) {
      this._name = name;
      this._job = job;
    }


    /** Возвращает объект с данными пользователя */
    getUserInfo() {
      const name = this._name.textContent;
      const job = this._job.textContent;

      return { name, job };
    }
    

    /** Принимает новые данные пользователя и добавляет их на страницу */
    setUserInfo({ name, job }) {
        this._name.textContent = name;
        this._job.textContent = job;
    }
}