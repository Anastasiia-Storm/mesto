/** Вставляет элементы в разметку
У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.
 */
export default class Section {
  constructor({ renderer }, containerSelector) { // data — это массив данных, которые нужно добавить на страницу при инициализации класса. Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице. containerSelector - контейнер, в который нужно добавлять созданные элементы.
    // this._item = item; // Массив данных, которые нужно добавить на страницу при инициализации класса
    this._renderer = renderer; // Отвечает за отрисовку всех элементов.
    this._container = document.querySelector(containerSelector); // CSS-селектор контейнера. защищенное поле _container, значение которого — DOM-элемент, найденный по селектору containerSelector.
  }


  /** Отрисовка всех элементов */
  renderItems(cards) {
    cards.forEach(card => {
      return this._renderer(card);
    })
  };
  

  /** Принимает DOM-элемент и добавляет его в контейнер */
  addItem(card) {
    this._container.append(card);
  }
}