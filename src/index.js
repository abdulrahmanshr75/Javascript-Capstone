import './style.css';
import getMovies from './modules/apiCall.js';
import render from './modules/renderStrucure.js';
import { postLikes, getLikes, displayCounts } from './modules/getLikes.js';
import moviesCounter from './modules/itemsCounter.js';
import onOpenModal from './modules/onOpenModal';

const starter = async () => {
  const data = await getMovies();
  await render(data);
  const films = moviesCounter(data);
  displayCounts(films);
  await getLikes();
  data.forEach(async (e) => await postLikes(e.id));

  document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', () => {
      onOpenModal(item.dataset.modal);
    });
  });
};

starter();
