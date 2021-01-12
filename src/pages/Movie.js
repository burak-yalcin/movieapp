import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieJumbotron from "../components/MovieJumbotron";

function Movie({ onToggle, theme, modalToggle }) {
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	const [image, setImage] = useState("");
	const [similarMovies, setSimilarMovies] = useState([]);

	function fetchData() {
		axios
			.get(
				"https://api.themoviedb.org/3/movie/" +
					id +
					"?api_key=eb785532bb9533d646dcf8f747dfc9ec&language=en-US"
			)
			.then(function (response) {
				setMovie(response.data);
				setImage(
					"https://image.tmdb.org/t/p/original" + response.data.backdrop_path
				);
			});
	}

	function fetchSimilar() {
		axios
			.get(
				"https://api.themoviedb.org/3/movie/" +
					id +
					"/similar?api_key=eb785532bb9533d646dcf8f747dfc9ec&language=en-US"
			)
			.then(function (response) {
				setSimilarMovies(response.data.results);
			});
	}

	useEffect(() => {
		fetchData();
		fetchSimilar();
	}, [id]);

	return (
		<div>
			<Header onToggle={onToggle} theme={theme} />
			<main role="main">
				<MovieJumbotron
					background={image}
					movie={movie}
					similar={similarMovies}
					theme={theme}
				/>
			</main>
			<Footer theme={theme} />
		</div>
	);
}

export default Movie;
