import {render, RenderPosition} from '../render.js';
import CreationForm from '../view/creation-form.js';
import EditingForm from '../view/editing-form.js';
import Filters from '../view/filters.js';
import Sorting from '../view/sorting.js';
import TripMain from '../view/trip-main.js';
import Waypoint from '../view/waypoint.js';

export default class GeneralPresenter {
  constructor() {
    // Поиск элементов в DOM, которые будут использоваться для рендеринга компонентов
    this.pageHeader = document.querySelector('.page-header');
    this.tripMain = this.pageHeader.querySelector('.trip-main');
    this.tripControlsFilters = this.pageHeader.querySelector('.trip-controls__filters');
    this.pageMain = document.querySelector('.page-main');
    this.tripEvents = this.pageMain.querySelector('.trip-events');

    // Создание списка для точек путешествия и добавление его в элемент trip-events
    this.waypointList = document.createElement('ul');
    this.waypointList.classList.add('trip-events__list');
    this.tripEvents.appendChild(this.waypointList);
  }

  // Рендеринг основного представления
  renderTripMain() {
    render(new TripMain(), this.tripMain, RenderPosition.AFTERBEGIN);
  }

  // Рендеринг фильтров
  renderFilters() {
    render(new Filters(), this.tripControlsFilters);
  }

  // Рендеринг сортировки
  renderSorting() {
    render(new Sorting(), this.tripEvents, RenderPosition.AFTERBEGIN);
  }

  // Рендеринг трех точек путешествия
  renderWaypoints() {
    for (let i = 0; i < 3; i++) {
      render(new Waypoint(), this.waypointList);
    }
  }

  // Рендеринг формы редактирования точки путешествия
  renderEditingForm() {
    render(new EditingForm(), this.waypointList, RenderPosition.AFTERBEGIN);
  }

  // Рендеринг формы создания новой точки путешествия
  renderCreationForm() {
    render(new CreationForm(), this.waypointList, RenderPosition.AFTERBEGIN);
  }

  // Точка входа для инициализации представления
  init() {
    this.renderTripMain();
    this.renderFilters();
    this.renderSorting();
    this.renderWaypoints();
    this.renderEditingForm();
    this.renderCreationForm();
  }
}
