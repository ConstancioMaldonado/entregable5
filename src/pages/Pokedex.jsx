import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from '../components/Pokedex/PokeCard'

const Pokedex = () => {

    const { nameTrainer } = useSelector(state => state)

    const [pokemons, setPokemons] = useState()

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
        axios.get(url)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(pokemons)

  return (
    <div>
        <header>
            <img src="/images/pokedex-img.png" alt="" />
        </header>
        <h1><span>Hi {nameTrainer}</span>, here find your favorite pokemon.</h1>

        <div>
            {
                pokemons?.results.map(pokemon => (
                    <PokeCard
                    key={pokemon.url}
                    pokemon={pokemon}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Pokedex
