const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BdTjDna5tsQY8gvFaUA7/likes";
export const postLikes = async (id) => {
  const postObject = { item_id: id };
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postObject),
  });
  return response;
};

export const getLikes = async () => {
  const likesData = await fetch(url);
  const allLikes = await likesData.json();
  console.log(allLikes);
};
