const render = (data) => {
  data.forEach((item) => {
    const list = document.getElementById('moviesList');
    list.innerHTML += `
    <div class="grid-items">
    <ul class="image-card">
    <img src="${item.image.original}" alt="">
    </ul>
    <div class="subtitles">
    <h4>${item.name}  <i class="fa fa-heart"></i></h4>
    </div>
    <button class="btn" id="button" data-modal=${item.id}>Comments</button>
    </div>
  `;
  });
};

export default render;
