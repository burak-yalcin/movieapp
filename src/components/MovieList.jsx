import React from "react";
import Card from "./Card";

export default function MovieList({ movies, theme }) {
	if (theme.color === "black") {
		var bg = "bg-dark";
		var text = "text-light";
	} else {
		var bg = "bg-light";
		var text = "text-dark";
	}

	const listMovies = movies.map((movie) => (
		<Card
			title={movie.original_title}
			image={movie.poster_path || undefined}
			popularity={movie.popularity}
			key={movie.id}
			id={movie.id}
			theme={theme}
		/>
	));
	return (
		<div className={"album py-1 " + bg}>
			<div className="container">
				<div className="row">{listMovies}</div>
			</div>
		</div>
	);
}
