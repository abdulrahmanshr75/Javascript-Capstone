import { appId } from './getLikes';

export const commentPost = async (itemId, username, comment) => {
  const api = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemId, username, comment }),
    },
  );
  const res = await api.json();
  return res;
};

export const getComments = async (id) => {
  try {
    const api = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`,
    );
    const res = await api.json();
    return res;
  } catch (err) {
    throw new Error('failed');
  }
};
