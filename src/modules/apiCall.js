const getMovies = async () => {
  const moviesData = await fetch('https://api.tvmaze.com/shows?page=1');
  const allData = await moviesData.json();
  return allData;
};

export default getMovies;
