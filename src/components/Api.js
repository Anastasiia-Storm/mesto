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


    // Добавление новой карточки
    addCard(data) {
        return fetch(`${this.baseUrl}/cards`, { // Метод fetch создаёт запрос на сервер и возвращает его ответ.
            method: 'POST', // POST — второй по распространённости метод. Его используют для отправки данных на сервер. // POST запрос к ресурсу 'https://mesto.nomoreparties.co/v1/cohort-63/cards'
            headers: {
                authorization: '8289c61b-1567-4959-abef-eb18a39b659e',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ // Поскольку метод POST отправляет данные, эти данные нужно как-то хранить в запросе. Для этого их нужно перевести в формат JSON и записать в свойство body объекта опций:
                name: data.title,
                link: data.link,
            })
        })
        .then((res) => {
          return this._checkResult(res);
        });
    }


    // Редкатировать профиль
    editProfile(data) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH', // PATCH — для частичного обновления ресурса. Например, при обновлении профиля пользователя;
        headers: {
          authorization: '8289c61b-1567-4959-abef-eb18a39b659e',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ // Поскольку метод POST отправляет данные, эти данные нужно как-то хранить в запросе. Для этого их нужно перевести в формат JSON и записать в свойство body объекта опций:
          name: data.name,
          about: data.about,
      })
      })
      .then((res) => {
        return this._checkResult(res);
      });
    }

  
    // deleteCard() {
    //   return fetch()
    // }

    deleteLike(data) {
      return fetch(`${this.baseUrl}/cards/${data._id}/likes`, {
        method: 'DELETE',
        headers: this.headers
      })
      .then((res) => {
        return this._checkResult(res);
      });
    };


    likeCard(data) {
      return fetch(`${this.baseUrl}/cards/${data._id}/likes`, {
        method: 'PUT',
        headers: this.headers
      })
      .then((res) => {
        return this._checkResult(res);
      });
    };

  }


export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
      authorization: '8289c61b-1567-4959-abef-eb18a39b659e',
      'Content-Type': 'application/json'
  }
});