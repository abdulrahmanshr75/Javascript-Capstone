const showComment = async () => {
  const moviesData = await fetch("https://api.tvmaze.com/shows?page=1");
  const allData = await moviesData.json();
  const content = document.createElement("div");
  body.append(content);
};

export const render = (data) => {
  data.forEach((e) => {
    const list = document.getElementById("moviesList");
    list.innerHTML += `
    <div class="grid-items">
    <ul class="image-card">
    <img src="${e.image.original}" alt="">
    </ul>
    <div class="subtitles">
    <h4>${e.name}  <i class="fa fa-heart"></i></h4>
    </div>
    <button onClick="showComment()" class="btn" id="button">Comments</button>
    </div>
  `;
  });
};
