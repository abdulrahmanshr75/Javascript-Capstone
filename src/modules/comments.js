const showComment = async () => {
  const moviesData = await fetch("https://api.tvmaze.com/shows?page=1");
  const allData = await moviesData.json();
  const content = document.createElement("div");
  body.append(content);
};
