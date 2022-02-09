const showComment = async (e) => {
  const moviesData = await fetch(`https://api.tvmaze.com/shows/${e}`);
  const allData = await moviesData.json();
  return allData;
};

export default showComment;
