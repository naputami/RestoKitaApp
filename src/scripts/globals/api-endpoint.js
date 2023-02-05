import CONFIG from './config';

const API_ENPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};
export default API_ENPOINT;
