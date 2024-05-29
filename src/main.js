import {render} from './render.js';
import CreationForm from './view/creation-form.js';
import EditingForm from './view/editing-form.js';
import Filters from './view/filters.js';
import Sorting from './view/sorting.js';
import TripMain from './view/trip-main.js';
import Waypoint from './view/waypoint.js';

const siteMainElement = document.querySelector('.page-header');
const siteHeaderElement = siteMainElement.querySelector('.trip-main');

render(new Waypoint(), siteHeaderElement);
render(new TripMain(), siteHeaderElement);
render(new Sorting(), siteHeaderElement);
render(new Filters(). siteHeaderElement);
render(new EditingForm(), siteHeaderElement);
render(new CreationForm(), siteHeaderElement);
