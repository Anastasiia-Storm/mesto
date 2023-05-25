export default class Api {
    constructor(config) { // options
      this.baseUrl = config.baseUrl;
      this.headers = config.headers;
      // this._checkResult = this._checkResult;
    }
    
    
    _checkResult(res) {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    }


    // Получить список всех карточек в виде массива 
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
        method: 'GET',
        headers: this.headers,
      })
      .then((res) => {
        return this._checkResult(res);
      });
    }



    //  Загрузка информации о пользователе с сервера
    // informationAboutUsers() { 
    //     return fetch(`${this.baseUrl}/users/me`, {
    //         method: 'GET',
    //         headers: this.headers
    //       })
    //       .then((res) => {
    //         return this._checkResult(res);
    //       });
    // }


    // Загрузка карточек с сервера
    // downloadСardsServer() {
    //    return fetch(`${this.baseUrl}/cohortId/cards`, {
    //     method: 'GET', // GET — самый распространённый метод. Данные обычно получают именно этим методом. Если метод не прописать явно, fetch будет отправлять запросы методом GET
    //     headers: this.headers,
    //     // body: JSON.stringify({
    //     //   name: title,
    //     //   link: link
    //     // }),
    //   })
    //   .then((res) => {
    //     return this._checkResult(res);
    //   });
    // }



    // Редактировать профиль
    // editProfile(data) {
    //     return fetch(`${this.baseUrl}/users/me`, {
    //         method: 'PATCH', // PATCH — для частичного обновления ресурса. Например, при обновлении профиля пользователя;
    //         headers: this.headers,
    //         body: JSON.stringify({
    //           name: data.name,
    //           about: data.job
    //         })
    //     })
    //     .then((res) => {
    //       return this._checkResult(res);
    //     });
    // }




    // Добавление новой карточки
    // addCard(title, link) {
    //     return fetch(`${this.baseUrl}cohortId/cards`, { // Метод fetch создаёт запрос на сервер и возвращает его ответ.
    //         method: 'POST', // POST — второй по распространённости метод. Его используют для отправки данных на сервер. // POST запрос к ресурсу 'https://mesto.nomoreparties.co/v1/cohort-63/cards'
    //         headers: {
    //             authorization: '8289c61b-1567-4959-abef-eb18a39b659e',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ // Поскольку метод POST отправляет данные, эти данные нужно как-то хранить в запросе. Для этого их нужно перевести в формат JSON и записать в свойство body объекта опций:
    //             name: title,
    //             link: link
    //         })
    //     })
    //     .then((res) => {
    //       return this._checkResult(res);
    //     });
    // }
        

  

    // deleteСard(id) {
    //     return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards/643961ee09ef944a9430e7fc', +id, {
    //         method: 'DELETE',
    //     }).then((res) => {
    //         if (res.ok) {
    //             return res.json();
    //         }
    //         /* отклоняем промис, чтобы перейти
    //         в блок catch, если сервер вернул ошибку */
    //         return Promise.reject(`Что-то пошло не так: ${res.status}`);
    //     })
    //     .catch((err) => {
    //         console.log(err); // выведем ошибку в консоль
    //     }); 
    // }


    // updateUserAvatar() {
    //     return fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me/avatar', {
    //         method: 'PATCH',
    //         headers: {
    //             authorization: '8289c61b-1567-4959-abef-eb18a39b659e',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: 'Горы Тяньцзи',
    //             link: 'https://vandruy.by/wp-content/uploads/2018/11/amazing-scenary-of-prince-tianzi-mountain-china-1024x683.jpeg'
    //         })
    //     })
    //     .then((res) => {
    //         if (res.ok) {
    //             return res.json();
    //         }
    //         /* отклоняем промис, чтобы перейти
    //         в блок catch, если сервер вернул ошибку */
    //         return Promise.reject(`Что-то пошло не так: ${res.status}`);
    //     })
    //     .catch((err) => {
    //         console.log(err); // выведем ошибку в консоль
    //     });
    // }

}


export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
      authorization: '8289c61b-1567-4959-abef-eb18a39b659e',
      'Content-Type': 'application/json'
  }
});