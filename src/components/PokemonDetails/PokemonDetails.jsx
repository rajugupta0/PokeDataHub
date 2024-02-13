import axios from "axios";
import { useParams } from "react-router-dom"


function PokemonDetails() {
  const {id} =useParams();
  async function downloadPokemons (){
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  console.log(response.data);
  }
  return (
    <>
    Details
    </>
  )
}

export default PokemonDetails
