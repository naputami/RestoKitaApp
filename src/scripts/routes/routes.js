import home from '../views/pages/home';
import favorites from '../views/pages/favorites';
import detail from '../views/pages/detail';

const routes = {
  '/': home, // default page
  '/home': home,
  '/favorites': favorites,
  '/detail/:id': detail,
};

export default routes;
