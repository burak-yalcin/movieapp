import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ThemeContext, { themes } from "../ThemeContext";

function Home({ onToggle, theme }) {
	const [movielist, setMovielist] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [popularMovie, setPopularMovie] = useState(
		"https://image.tmdb.org/t/p/original/k8Q9ulyRE8fkvZMkAM9LPYMKctb.jpg"
	);

	const [title, setTitle] = useState(true);
	const [countBadge, setCountBadge] = useState(true);
	const [jumbotronHeight, setJumbotronHeight] = useState("");
	const [firstSearch, setFirstSearch] = useState(false);

	function fetchData() {
		axios
			.get(
				"https://api.themoviedb.org/3/search/movie?api_key=eb785532bb9533d646dcf8f747dfc9ec&language=en-US&query=" +
					searchInput +
					"&page=1&include_adult=false"
			)
			.then(function (response) {
				setMovielist(response.data.results);
			});
	}

	function fetchPopularData() {
		axios
			.get(
				"https://api.themoviedb.org/3/movie/popular?api_key=eb785532bb9533d646dcf8f747dfc9ec&language=en-US&page=1"
			)
			.then(function (response) {
				const randomNumber = Math.floor(
					Math.random() * response.data.results.length
				);
				setPopularMovie(response.data.results[randomNumber]);
			});
	}

	useEffect(() => {
		if (searchInput !== "") {
			fetchData();
		}
	}, [searchInput]);

	useEffect(() => {
		fetchPopularData();
	}, []);

	function onSubmit(formState) {
		setSearchInput(formState);
		setCountBadge(false);
		setTitle(false);
		var newMovie = popularMovie;
		newMovie.overview = null;
		setPopularMovie(newMovie);
		setJumbotronHeight("searched");
		setFirstSearch(true);
	}

	if (theme.color === "black") {
		var bg = "bg-dark";
		var text = "text-light";
	} else {
		var bg = "bg-light";
		var text = "text-dark";
	}

	return (
		<div style={theme}>
			<Header onToggle={onToggle} theme={theme} />
			<main role="main" className={bg}>
				<Jumbotron
					movie={popularMovie}
					onSubmit={onSubmit}
					theme={theme}
					countBadge={countBadge}
					title={title}
					height={jumbotronHeight}
				/>
				<div className={"album py-5 " + bg}>
					<div className="container">
						<MovieList
							movies={movielist}
							theme={theme}
							countBadge={countBadge}
							isSearched={firstSearch}
							searchInput={searchInput}
						/>
					</div>
				</div>
			</main>
			<Footer theme={theme} />
		</div>
	);
}

export default Home;
