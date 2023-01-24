import React, { useCallback, useEffect, useState } from 'react';
// import dummyMovies from './Dummy_Data';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	// const dummyMovies = [
	// 	{
	// 		id: 1,
	// 		title: 'Pathaan',
	// 		openingText: 'This is the opening text of the movie',
	// 		releaseDate: '2023-01-25',
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Happy New Year',
	// 		openingText: 'This is the second opening text of the movie',
	// 		releaseDate: '2016-01-01',
	// 	},
	// ];

	// some change in syntax
	// function fetchMoviesHandler() {
	// 	fetch('https://swapi.dev/api/films')
	// 		.then(response => { return response.json() })
	// 		.then(data => {
	// 			const transformedMovies = data.results.map(movieData => {
	// 				return {
	// 					id: movieData.episode_id,
	// 					title: movieData.title,
	// 					director: movieData.director,
	// 					openingText: movieData.opening_crawl,
	// 					releaseDate: movieData.release_date
	// 				}
	// 			})
	// 			setMovies(transformedMovies);
	// 			console.log(transformedMovies)
	// 		});
	// }

	const fetchMoviesHandler = useCallback(async ()  => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('https://swapi.dev/api/films/');
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json();
			const transformedMovies = data.results.map((movieData) => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					openingText: movieData.opening_crawl,
					releaseDate: movieData.release_date,
				};
			});
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
		console.log(error.message)
	}, []);

	useEffect(() => {
		fetchMoviesHandler()
	}, [fetchMoviesHandler]);

	let content = <p>Found no movies.</p>;
	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}
	if (error) {
		content = <p>{error}</p>;
	}
	if (isLoading) {
		content = <p>Loading...</p>;
	}
	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{content}
			</section>
		</React.Fragment>
	);
}

export default App;
