import { fetchData } from '../service/serv_character.js';


export default function init() {

  const characterNameElement = document.getElementById("characterName");

  const displayCharacterName = async () => {
    try {
      const characterName = await fetchData();
      characterNameElement.textContent = characterName;
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  displayCharacterName();
}
  