export const getCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
