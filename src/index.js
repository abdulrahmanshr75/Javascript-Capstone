import './style.css';
import getMovies from './modules/apiCall.js';
import render from './modules/renderStrucure.js';

const starter = async () => {
  const data = await getMovies();
  await render(data);
};

starter();
