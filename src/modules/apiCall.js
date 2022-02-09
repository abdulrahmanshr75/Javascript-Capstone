const getMovies = async () => {
  const moviesData = await fetch("https://api.tvmaze.com/shows?page=1");
  const allData = await moviesData.json();

  let data = allData.slice(0,20).map((item)=> {
      return item
  })
  return data
};

export default getMovies;
