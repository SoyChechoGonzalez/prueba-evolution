import React from 'react';
import './PokemonList.css';

import FilterableTable from 'react-filterable-table';

const PokemonList = ({pokemons}) => {
	const renderImage = (props) => {
		return (
			<img key={props.value}
			     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.value}.png`}
			     alt={props.record.name} title={props.record.name} />
		);
	};
	const renderStat = (props) => {
		console.log(props.value);
		return (
			<span key={props.value}>{props.value}</span>
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
		{name: 'name', displayName: 'Nombre', inputFilterable: true, sortable: true},
		{
			name: `stats.${0}.base_stat`,
			displayName: 'Hp',
			inputFilterable: true,
			sortable: true,
			render: renderStat
		},
		{
			name: `stats.${1}.base_stat`,
			displayName: 'Ataque',
			inputFilterable: true,
			sortable: true,
			render: renderStat
		},
		{
			name: `stats.${2}.base_stat`,
			displayName: 'Defensa',
			inputFilterable: true,
			sortable: true,
			render: renderStat
		},
		{
			name: `stats.${3}.base_stat`,
			displayName: 'Ataque Especial',
			inputFilterable: true,
			sortable: true,
			render: renderStat
		},
		{
			name: `stats.${4}.base_stat`,
			displayName: 'Defensa Especial',
			inputFilterable: true,
			sortable: true,
			render: renderStat
		},
		{
			name: `stats.${5}.base_stat`,
			displayName: 'Velocidad',
			inputFilterable: true,
			sortable: true,
			render: renderStat
		}
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