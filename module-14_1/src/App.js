import React, { useCallback, useEffect, useState } from 'react';
// import dummyMovies from './Dummy_Data';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// some change in syntax (using promise)
	// function fetchMoviesHandler() {
	// 	fetch('https://swapi.dev/api/films')
	// 		.then(response => { console.log(response); return response.json() })
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
	
	// using asynchronous function
	const fetchMoviesHandler = useCallback(async ()  => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('https://swapi.dev/api/films/');
			console.log(response);
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json();
			console.log(data);
			const transformedMovies = data.results.map((movieData) => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					director: movieData.director,
					openingText: movieData.opening_crawl,
					releaseDate: movieData.release_date,
				};
			});
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
			console.log(error);
		}
		setIsLoading(false);
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
