import './style.css';
import getMovies from './modules/apiCall.js';
import render from './modules/renderStrucure.js';
import { postLikes, displayCounts } from './modules/getLikes.js';
import moviesCounter from './modules/itemsCounter.js';
import onOpenModal from './modules/onOpenModal.js';

const starter = async () => {
  const data = await getMovies();
  await render(data);
  const films = moviesCounter(data);
  displayCounts(films);
  data.forEach((e) => postLikes(e.id));
  document.querySelector('.movies-section').addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
      onOpenModal(e.target.id);
    }
  });
};

starter();
