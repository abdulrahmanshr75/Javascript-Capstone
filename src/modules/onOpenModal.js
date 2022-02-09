import showComment from "./comments";
const onOpenModal = async (id) => {
  const serieData = await showComment(id);
  console.log(serieData);
  const popUp = document.createElement("div");
  document.body.append(popUp);
  popUp.classList.add("popup");
  popUp.innerHTML += `
    <img class="popup-image" src=${serieData.image.original}>
    <span class="close-btn">&times;</span>
    <h2>title : ${serieData.name}</h2>
    <p>Genre : ${serieData.genres}</p>
    <h3>Add a new comment</h3>
    <form class="my-form">
    <input type="text" class="form-control" placeholder="Add your name">
    <textarea class="form-control" placeholder="Add your comment"></textarea>
    <input type="submit" class="button" value="Comment">
    </form>
  `;
};

export default onOpenModal;
