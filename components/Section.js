/** Отрисовка элементов на странице */
export default class Section {
  constructor({ items, renderer }, containerSelector) { // items — это массив данных, которые нужно добавить на страницу при инициализации класса. Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице. containerSelector - контейнер
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector; // CSS-селектор контейнера. защищенное поле _container, значение которого — DOM-элемент, найденный по селектору containerSelector.
  }


  /** Отрисовка всех элементов */
  renderItems() {
    this._items.forEach((item) => { // Перебирает массив данных 
      this._renderer(item); // вызываем renderer, передав item
    });
  }

  
  /** Принимает DOM-элемент и добавляет его в контейнер */
  addItem(element) {
    this._container.prepend(element);
  }
}