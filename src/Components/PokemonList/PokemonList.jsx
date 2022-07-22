import React from 'react';
import './PokemonList.css';

import FilterableTable from 'react-filterable-table';

const PokemonList = ({pokemons}) => {
	const renderImage = () => {
		return (
			<picture className='pokemon-image'>
				{
					pokemons.map((pokemon) => {
						return (
							<img key={pokemon.id} src={pokemon.sprites.front_default} alt={pokemon.name} />
						);
					})
					
				}
			</picture>
		);
	};
	const fields = [
		{name: 'id', displayName: 'Id', inputFilterable: true, exactFilterable: true, sortable: true},
		{
			name: 'sprites.front_default',
			displayName: 'Imagen',
			inputFilterable: true,
			exactFilterable: true,
			sortable: false,
			render: renderImage
		},
		{name: 'name', displayName: 'Name', inputFilterable: true, sortable: true}
	
	];
	return (
		<div className='PokemonList'>
			<FilterableTable
				namespace='People'
				initialSort='name'
				data={pokemons}
				fields={fields}
				noRecordsMessage='There are no people to display'
				noFilteredRecordsMessage='No people match your filters!'
			/>
		</div>
	
	);
	
};

export default PokemonList;