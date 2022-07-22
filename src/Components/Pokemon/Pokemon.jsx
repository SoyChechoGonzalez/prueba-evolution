import React from 'react';

const Pokemon = ({name, imagen}) => {
	return (
		<div className='Pokemon'>
			<h1>{name}</h1>
			<img src={imagen} alt={name} />
		</div>
	);
};

export default Pokemon;