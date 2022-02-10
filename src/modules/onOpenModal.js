<<<<<<< Updated upstream
import showComment from "./comments";
import { getComments } from "./commentsApi";
const onOpenModal = async (id) => {
  console.log(id);
=======
import commentCounter from "./commentCounter";
import showComment from "./comments";
import { commentPost } from "./commentsApi";
import fetchComments from "./fetchComments";
const onOpenModal = async (id) => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <h3>Comments</h3>
    <div class="comments">
    </div>
    <h3>Add a new comment</h3>
    <form class="my-form">
    <input type="text" class="form-control" placeholder="Add your name">
    <textarea class="form-control" placeholder="Add your comment"></textarea>
=======
    <h3 class="comment-title">Comments</h3>
    <div class="comments">
    </div>
    <h3>Add a new comment</h3>
    <form id="comment-form" class="my-form">
    <input id="username" type="text" class="form-control" placeholder="Add your name">
    <textarea id="comment-body" class="form-control" placeholder="Add your comment"></textarea>
>>>>>>> Stashed changes
    <input type="submit" class="button" value="Comment">
    </form>
  `;
  const commentWrapper = document.querySelector(".comments");
<<<<<<< Updated upstream
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
=======
  const title = document.querySelector(".comment-title");

  try {
    fetchComments(id);
    setTimeout(() => {
      const counter = commentCounter(commentWrapper);
      title.innerHTML = `Comments (${counter})`;
    }, 1000);
  } catch (err) {
    console.log(err);
  }
  const form = document.getElementById("comment-form");
  const username = document.getElementById("username");
  const commentBody = document.getElementById("comment-body");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username.value && commentBody.value) {
      try {
        commentPost(id, username.value, commentBody.value);
        username.value = "";
        commentBody.value = "";
        let loading = true;
        if (loading) {
          commentWrapper.textContent = "Loading....";
          setTimeout(() => {
            commentWrapper.textContent = "";
            fetchComments(id);
            setTimeout(() => {
              const counter = commentCounter(commentWrapper);
              title.innerHTML = `Comments (${counter})`;
            }, 1000);
          }, 2000);
          loading = false;
        }
      } catch (err) {
        console.log(err);
      }
    }
  });
>>>>>>> Stashed changes

  document.querySelector(".close-btn").addEventListener("click", () => {
    popUp.remove();
  });
};

export default onOpenModal;
