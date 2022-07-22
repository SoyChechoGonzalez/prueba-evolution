import React from 'react';
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon.jsx';


const PokemonList = ({pokemon}) => {
	console.log(pokemon);
	return (
		<div className='PokemonList'>
			{
				pokemon.map((poke) => {
					return (
						<Pokemon key={poke.id} name={poke.name} imagen={poke.sprites.front_default} id={poke.id} />
					);
				})
			}
		</div>
	);
	
};

export default PokemonList;