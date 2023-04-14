export default class Api {
    constructor() {
//         // this._url = config.url;
//         // this._headers = config._headers;

    }

//     // getAllCards() {
//     //     return fetch(this._url, {
//     //         method: "GET", 
//     //         headers: this._headers;
//     //     })
//     // }

    // Загрузка информации о пользователе с сервера
    getUserInfo() {
        return fetch('https://nomoreparties.co/v1/cohort-63/users/me', {
            method: 'GET',
            headers: {
                authorization: 'd654bd4b-bb05-4698-98ab-52d1f65a5443'
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            /* отклоняем промис, чтобы перейти
            в блок catch, если сервер вернул ошибку */
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
    }

    // Загрузка карточек с сервера
    getCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-63/cards', {
            method: 'GET',
            headers: {
                authorization: 'd654bd4b-bb05-4698-98ab-52d1f65a5443'
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            /* отклоняем промис, чтобы перейти
            в блок catch, если сервер вернул ошибку */
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
    }

    // Редактировать профиль
    editProfile() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-63/users/me', {
            method: 'PATCH',
            headers: {
                authorization: 'd654bd4b-bb05-4698-98ab-52d1f65a5443',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Marie Skłodowska Curie',
                about: 'Physicist and Chemist'
            })
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            /* отклоняем промис, чтобы перейти
            в блок catch, если сервер вернул ошибку */
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
    }
  

// }
// //index.js
// // const api = new Api({
// //   link: 'https://mesto.nomoreparties.co/v1/cohort-63/cards',
// //   headers: {
// // //     'content-type': 'application/json',
// // //     authorization: '23f5b49e-3722-4d4b-b616-4f4f71d989aa'
// // //   }
// // })
}
// api.getAllCards()