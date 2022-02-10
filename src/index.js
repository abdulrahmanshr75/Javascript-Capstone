<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import './style.css';
import getMovies from './modules/apiCall.js';
import render from './modules/renderStrucure.js';
=======
>>>>>>> Stashed changes
import "./style.css";
import getMovies from "./modules/apiCall.js";
import render from "./modules/renderStrucure.js";
import { postLikes, getLikes } from "./modules/getLikes.js";
import onOpenModal from "./modules/onOpenModal";
<<<<<<< Updated upstream
=======
import commentCounter from "./modules/commentCounter";
>>>>>>> Stashed changes
>>>>>>> Stashed changes

const starter = async () => {
  const data = await getMovies();
  await render(data);
  await getLikes();
  data.forEach(async (e) => {
    return await postLikes(e.id);
  });
  document.querySelectorAll(".btn").forEach((item) => {
    item.addEventListener("click", () => {
      onOpenModal(item.dataset.modal);
    });
  });
};

starter();
