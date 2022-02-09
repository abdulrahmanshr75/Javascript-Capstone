import showComment from "./comments";
import { getComments } from "./commentsApi";
const onOpenModal = async (id) => {
  console.log(id);
  const serieData = await showComment(id);
  console.log(serieData);
  const popUp = document.createElement("div");
  document.body.append(popUp);
  popUp.classList.add("open");
  popUp.innerHTML += `
    <img class="popup-image" src=${serieData.image.original}>
    <span class="close-btn">&times;</span>
    <h2>title : ${serieData.name}</h2>
    <p>Genre : ${serieData.genres}</p>
    <h3>Comments</h3>
    <div class="comments">
    </div>
    <h3>Add a new comment</h3>
    <form class="my-form">
    <input type="text" class="form-control" placeholder="Add your name">
    <textarea class="form-control" placeholder="Add your comment"></textarea>
    <input type="submit" class="button" value="Comment">
    </form>
  `;
  const commentWrapper = document.querySelector(".comments");
  try {
    const apiComments = await getComments(id);
    apiComments.forEach(
      (item) =>
        (commentWrapper.innerHTML += `<div class="oneComment">
    <p class="time"> Date : ${item.creation_date}</p>
    <p class="username"> User : ${item.username}</p>
    <p class="body">Says :${item.comment}</p>
    <div class="line"></div>
    </div>
    `)
    );
  } catch (err) {
    console.log(err);
  }

  document.querySelector(".close-btn").addEventListener("click", () => {
    popUp.remove();
  });
};

export default onOpenModal;
