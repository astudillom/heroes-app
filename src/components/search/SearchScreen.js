import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm({ searchText: q });
	const { searchText } = formValues;
	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${searchText}`);
	};
	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
	return (
		<div>
			<div className='row animate__animated animate__fadeIn'>
				<div className='col-5'>
					<h4>Search Form</h4>
					<hr />
					<form onSubmit={handleSearch}>
						<input
							type='text'
							placeholder='Find your hero'
							className='form-control m-1 ds-input'
							autoComplete='off'
							name='searchText'
							value={searchText}
							onChange={handleInputChange}
						/>
						<div class='d-grid gap-2 m-3'>
							<button
								type='submit'
								className='btn m-1 btn-block btn-outline-dark'>
								Search...
							</button>
						</div>
					</form>
				</div>
				<div className='col-7'>
					<h4>Results</h4>
					<hr />
					{q === '' && (
						<div className='alert alert-secondary'>Search a hero</div>
					)}

					{q !== '' && heroesFiltered.length === 0 && (
						<div className='alert alert-danger'>
							There is no a hero with {q}
						</div>
					)}
					{heroesFiltered.map((hero) => {
						return <HeroCard key={hero.id} {...hero} />;
					})}
				</div>
			</div>
		</div>
	);
};
