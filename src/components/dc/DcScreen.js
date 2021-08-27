import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
	return (
		<div className='animate__animated animate__fadeIn'>
			<h3>DC</h3>
			<hr />
			<HeroList publisher='DC Comics' />
		</div>
	);
};
