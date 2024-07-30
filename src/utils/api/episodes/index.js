export const getBestEpisodes = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/episode");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
