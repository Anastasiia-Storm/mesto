export default class Api {
    constructor(options) {
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
        .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        });
    } 

    // Загрузка карточек с сервера
    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-63/cards', {
            method: 'GET',
            headers: {
                authorization: 'd654bd4b-bb05-4698-98ab-52d1f65a5443'
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
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
        .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        }); 
    } 
  

    addNewCard() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-63/cards', {
            method: 'POST',
            headers: {
                authorization: 'd654bd4b-bb05-4698-98ab-52d1f65a5443',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Горы Тяньцзи',
                link: 'https://vandruy.by/wp-content/uploads/2018/11/amazing-scenary-of-prince-tianzi-mountain-china-1024x683.jpeg'
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
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        }); 
    }


    // deleteСard() {
    //     return fetch('https://mesto.nomoreparties.co/v1/cohort-63/cards/643961ee09ef944a9430e7fc', {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: 'd654bd4b-bb05-4698-98ab-52d1f65a5443',
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


    // updateUserAvatar() {
    //     return fetch('https://mesto.nomoreparties.co/v1/cohort-63/users/me/avatar', {
    //         method: 'PATCH',
    //         headers: {
    //             authorization: 'd654bd4b-bb05-4698-98ab-52d1f65a5443',
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

    const api = new Api({
        baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
        headers: {
          authorization: 'd654bd4b-bb05-4698-98ab-52d1f65a5443',
          'Content-Type': 'application/json'
        }
      });
