const render = (data) => {
  data.forEach((e) => {
    const list = document.getElementById('moviesList');
    list.innerHTML += `
    <div class="grid-items">
    <ul class="image-card">
    <img src="${e.image.original}" alt="">
    </ul>
    <div class="subtitles">
    <h4>${e.name}  <i class="fa fa-heart"></i></h4>
    
    </div>
    <button id="button">Comments</i></button>
    </div>
  `;
  });
};

export default render;
