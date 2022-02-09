import "./style.css";
import getMovies from "./modules/apiCall.js";
import render from "./modules/renderStrucure.js";
import { postLikes, getLikes } from "./modules/getLikes.js";

const starter = async () => {
  const data = await getMovies();
  await render(data);
  await getLikes();
  data.forEach(async (e) => {
    return await postLikes(e.id);
});
};

starter();
