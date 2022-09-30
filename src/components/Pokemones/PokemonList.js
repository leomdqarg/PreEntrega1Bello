import { useEffect, useState } from "react"
const apiUrl = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20'


const PokemonList = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
      fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(res => {
            console.log(res)
            setPokemons(res.results)
        })
        .catch(error => {
            console.error(error)
        })

    }, [])

    return (
        <div className="bg-secondary">
            <h1>Mi listado de pokemones</h1>
            {pokemons.map(pokemon => <div><a target="_blank" href={pokemon.url}>{pokemon.name}</a></div>)}
        </div>
    )
}

export default PokemonList