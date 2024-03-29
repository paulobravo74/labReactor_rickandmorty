const url = 'https://rickandmortyapi.com/api';


export const fetchData = async () => {
  try {
    const response = await fetch(`${url}/character`);
    const jsonData = await response.json();
    //console.log(jsonData.results);
    return jsonData.results;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return null;
  }
};


export const get_character = (index) => {
  try {
    const response = fetch(jsonData.results[index]);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return null;
  }
};