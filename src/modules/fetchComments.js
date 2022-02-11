/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import { getComments } from './commentsApi.js';

const fetchComments = async (id) => {
  const commentWrapper = document.querySelector('.comments');
  const apiComments = await getComments(id);
  if (apiComments?.error?.status !== 400) {
    apiComments.forEach(
      (item) => (commentWrapper.innerHTML += `<div class="oneComment">
          <p class="time"> Date : ${item.creation_date}</p>
          <p class="username"> User : ${item.username}</p>
          <p class="body">Says :${item.comment}</p>
          <div class="line"></div>
          </div>
          `),
    );
  } else {
    return null;
  }
};

export default fetchComments;
