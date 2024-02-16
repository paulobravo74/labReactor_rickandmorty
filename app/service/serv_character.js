const url = 'https://rickandmortyapi.com/api';


export const fetchData = async () => {
  try {
    const response = await fetch(`${url}/character`);
    const jsonData = await response.json();
    //console.log(jsonData.results);
    return jsonData.results[0];
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return null;
  }
};

