export default class UserInfo { // UserInfo получает и изменяет данные пользователя
    constructor({ userInfoSelector, userAboutSelector, userAvatarSelector }) {
        this._userInfo = document.querySelector(userInfoSelector)
        this._userAbout = document.querySelector(userAboutSelector)
        this._userAvatar = document.querySelector(userAvatarSelector)
    }


    /** Возвращает объект с данными пользователя */
    getUserInfo() { // Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
        return {
            name: this._userInfo.textContent,
            about: this._userAbout.textContent,
            avatar: this._userAvatar.src
        }; 
    };

    

    /** Принимает новые данные пользователя и добавляет их на страницу */
    setUserInfo({ name, about, avatar }){
        if(name, about){
            this._userInfo.textContent = name;
            this._userAbout.textContent = about; 
        } else {
            this.getUserInfo();
        };
        if(avatar){
            this._userAvatar.src = avatar;
        } else {
            this.getUserInfo();
        };
    };
}