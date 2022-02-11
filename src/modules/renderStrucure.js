import { updateLikes } from "./getLikes.js";

const render = (data) => {
  data.forEach(async (item) => {
    const likes = await updateLikes(item.id);
    const list = document.getElementById("moviesList");
    list.innerHTML += `
    <div class="grid-items">
    <ul class="image-card">
    <img src="${item.image.original}" alt="">
    </ul>
    <div class="subtitles">
    <h4>${item.name}  <i class="fa fa-heart like"><span>${likes}</span></i></h4>
    </div>
    <button class="btn" id=${item.id}>Comments</button>
    </div>
  `;
  });
};

export default render;
