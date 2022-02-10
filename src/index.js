import "./style.css";
import getMovies from "./modules/apiCall.js";
import render from "./modules/renderStrucure.js";
import { postLikes, getLikes, displayCounts } from "./modules/getLikes.js";
import moviesCounter from "./modules/itemsCounter.js";

const starter = async () => {
  const data = await getMovies();
  await render(data);
  const films = moviesCounter(data);
  displayCounts(films);
  await getLikes();
  data.forEach(async (e) => {
    return await postLikes(e.id);
  });
};

starter();
