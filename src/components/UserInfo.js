export default class UserInfo { // UserInfo получает и изменяет данные пользователя
    constructor({ nameSelector, jobSelector }) {
      this._name = document.querySelector(nameSelector);
      this._job = document.querySelector(jobSelector);
    }


    /** Возвращает объект с данными пользователя */
    getUserInfo() { // Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
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