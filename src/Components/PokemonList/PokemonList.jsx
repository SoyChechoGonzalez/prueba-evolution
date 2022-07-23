import React from 'react';
import './PokemonList.css';

import FilterableTable from 'react-filterable-table';
import Pokemon from '../Pokemon/Pokemon.jsx';

const PokemonList = ({pokemons}) => {
	const renderImage = (props) => {
		return (
			<Pokemon key={props.value}
			         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.value}.png`}
			         alt={props.record.name} title={props.record.name} />
		);
	};
	const fields = [
		{name: 'id', displayName: 'Id', inputFilterable: true, exactFilterable: true, sortable: true},
		{
			name: 'id',
			displayName: 'Imagen',
			inputFilterable: true,
			exactFilterable: true,
			sortable: false,
			render: renderImage
		},
		{name: 'name', displayName: 'Nombre', inputFilterable: true, sortable: true}
	];
	
	return (
		<FilterableTable
			namespace='People'
			initialSort='id'
			data={pokemons}
			fields={fields}
			noRecordsMessage='no hay pokemones para mostrar'
			noFilteredRecordsMessage='No tengo pokemones que coincidan con tu filtro'
		/>
	);
	
};

export default PokemonList;