import React from 'react';

const Pokemon = ({iconClassName}) => {
	return (
		<div className='Pokemon'>
			<img src={iconClassName} />
		</div>
	);
};

export default Pokemon;