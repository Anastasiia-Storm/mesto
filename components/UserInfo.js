export default class UserInfo { // UserInfo получает и изменяет данные пользователя
    constructor({ name, description }) {
      this._name = name;
      this._description = description;
    }


    /** Возвращает объект с данными пользователя */
    // getUserInfo() {
    //   this._userInfo = {
    //     name: this._name.textContent,
    //     description: this._description.textContent,
    //   }
    //   console.log(this._userInfo.name);
    //   return this._userInfo;
    // }

    getUserInfo() {
      const name = this._name.textContent;
      const description = this._description.textContent;
      return { name, description };
    }
    

    /** Принимает новые данные пользователя и добавляет их на страницу */
    setUserInfo({ name, description }) {
        this._name.textContent = name;
        this._description.textContent = description;
        console.log(name);
        console.log(description);
    }
}
// Тут вроде все верно