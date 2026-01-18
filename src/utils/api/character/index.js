export const getCharacter = async (id) => {
  if (!id || (Array.isArray(id) && id.length === 0)) {
    return null;
  }

  const idPath = Array.isArray(id) ? id.join(",") : id;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${idPath}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
