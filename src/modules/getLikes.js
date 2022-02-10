export const appId = "Jly4f1WO7wdijNbTj3up";
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
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
