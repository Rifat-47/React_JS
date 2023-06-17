import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = useCallback(async () => {
		console.log('fetching data');
		setIsLoading(true);
		setError(null);

		fetch('https://module-14-2-e90d2-default-rtdb.firebaseio.com/movies.json')
			.then(response => {
				// console.log(response); 
				if (!response.ok) {
					throw new Error('Failed to fetch movies.');
				}
				return response.json()
			})
			.then(data => {
				console.log(data);

				const loadedMovies = [];
				for (const key in data) {
					loadedMovies.push({
						id: key,
						title: data[key].title,
						openingText: data[key].openingText,
						releaseDate: data[key].releaseDate,
					})
				}

				loadedMovies.sort((a, b) => {
					const dateA = new Date(a.releaseDate);
					const dateB = new Date(b.releaseDate);
					return dateA - dateB;
				});

				setMovies(loadedMovies);
				setIsLoading(false);
			})
			.catch(error => {
				console.log(error.message);
				setError(error.message);
				setIsLoading(false);
			})
			// .finally(() => {
			// 	setIsLoading(false);
			// });
	}, []);

	// const fetchMoviesHandler = useCallback(async () => {
	// 	setIsLoading(true);
	// 	setError(null);
	// 	try {
	// 		const response = await fetch('https://module-14-2-e90d2-default-rtdb.firebaseio.com/movies.json');
	// 		console.log(response)
	// 		if (!response.ok) {
	// 			throw new Error('Something went wrong!');
	// 		}

	// 		const data = await response.json();
	// 		console.log(data);

	// 		const loadedMovies = [];
	// 		for (const key in data) {
	// 			loadedMovies.push({
	// 				id: key,
	// 				title: data[key].title,
	// 				openingText: data[key].openingText,
	// 				releaseDate: data[key].releaseDate,
	// 			})
	// 		}
	// 		// const transformedMovies = data.results.map((movieData) => {
	// 		// 	return {
	// 		// 		id: movieData.episode_id,
	// 		// 		title: movieData.title,
	// 		// 		openingText: movieData.opening_crawl,
	// 		// 		releaseDate: movieData.release_date,
	// 		// 	};
	// 		// });
	// 		setMovies(loadedMovies);
	// 	} catch (error) {
	// 		setError(error.message);
	// 	}
	// 	setIsLoading(false);
	// }, []);

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	async function addMovieHandler(movie) {
		console.log(movie);
		setMovies(prevMovies =>	[...prevMovies, movie]);
		const response = await fetch("https://module-14-2-e90d2-default-rtdb.firebaseio.com/movies.json", {
			method: "POST",
			// body accepts json data, json format is used for exchanging data between frontend & backend
			body: JSON.stringify(movie), // JSON.stringify takes an obj & turns it json format.
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log(data);
		// fetchMoviesHandler();
	}

	let content = <p>Found no movies.</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p style={{ color: error ? 'red' : '' }}>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
