import 'regenerator-runtime'; /* for async await transpile */
// IMPORT SCSS
import '../styles/main.scss';

// IMPORT CUSTOM ELEMENTS
import './views/elements/navbar';
import './views/elements/hero-section';
import './views/elements/restaurant-item';
import './views/elements/restaurant-list';
import './views/elements/skip-content';
import './views/elements/restaurant-info';
import './views/templates/detail-template';
import './views/elements/like-button';
import './views/elements/liked-button';

// IMPORT FONT AWESOME
import '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome';
import '../../node_modules/@fortawesome/fontawesome-free/js/solid';
import '../../node_modules/@fortawesome/fontawesome-free/js/regular';

// IMPORT LAZYSIZES
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// IMPORT APP
import App from './views/app';
// IMPORT SWREGISTER
import swRegister from './utils/sw-register';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.menu-list'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('#main').scrollIntoView({
    behavior: 'smooth',
  });
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
