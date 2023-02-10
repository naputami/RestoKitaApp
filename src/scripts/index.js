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
import '../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '../../node_modules/@fortawesome/fontawesome-free/js/all';

// IMPORT APP
import App from './views/app';
import swRegister from './utils/sw-register';

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
