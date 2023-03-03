import axios from 'axios'
import './styles/pokecard.css'
import React, { useEffect, useState } from 'react'

const PokeCard = ({ pokemon }) => {

    console.log(pokemon)

    const [poke, setPoke] = useState()

    useEffect(() => {
        axios.get(pokemon.url)
        .then(res => setPoke(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(poke)

  return (
    <article className='card'>
        <header className='card_header'>
            <img className='card_avatar' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <h2 className='card_name'>{poke?.name}</h2>
        <ul className='card_type-list'>
            {
                poke?.types.map(type => (
                    <li className='card_type-list' key={type.type.name}>{type.type.name}</li>
                ))
            }
        </ul>
        <hr className='card_hr'/>
        <ul className='card_type-list'>
            {
                poke?.stats.map(stat => (
                    <li className='card_stat-item' key={stat.stat.url}>
                        <span className='card_stat-name'>{stat.stat.name}</span>
                        <span className='card_stat-number'>{stat.base_stat}</span>

                    </li>
                ))
            }
        </ul>
    </article> 
  )
}

export default PokeCard