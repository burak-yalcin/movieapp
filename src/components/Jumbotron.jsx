import React, { useState } from "react";

export default function Jumbotron({
	movie,
	onSubmit,
	countBadge,
	title,
	height,
}) {
	var backgroundImage = "/2M2JxEv3HSpjnZWjY9NOdGgfUd.jpg";

	if (movie.backdrop_path !== undefined) {
		var backgroundImage = movie.backdrop_path;
	}
	var style = {
		background:
			"url(https://image.tmdb.org/t/p/original" + backgroundImage + ")",
		backgroundSize: "cover",
	};

	const [searchInput, setSearchInput] = useState("");

	function onChange(e) {
		setSearchInput(e.target.value);
	}

	var description = "";
	if (movie.overview != null) {
		description = movie.overview;
	}

	return (
		<section
			className={"animate-area jumbotron text-center bg-dark " + height}
			style={style}
		>
			<div className="container">
				{countBadge ? (
					<h3>
						<span className="badge badge-success mb-3">Popular Today</span>
						<span className="badge badge-danger mb-3 ml-3">
							{movie.vote_average}
						</span>
					</h3>
				) : null}

				<h1 className="display-4 font-weight-bold bg-success rounded text-white ">
					{title ? movie.title : "Search Results"}
				</h1>

				<p className="lead text-white mt-3 font-weight-bold">
					{description.length > 180
						? description.substring(0, 180) + "..."
						: description}
				</p>

				<div className="form-row d-flex justify-content-center mt-5">
					<div className="col-6">
						<label htmlFor="text" className="text-white text-weight-bold">
							search to find more extraordinary movies
						</label>

						<input
							id="text"
							type="text"
							className="form-control text-center"
							value={searchInput}
							placeholder="Lord of the Rings"
							onChange={onChange}
						/>
					</div>
				</div>
				<input
					type="submit"
					value="Search"
					className="btn btn-success my-2"
					onClick={() => {
						onSubmit(searchInput);
					}}
				/>
			</div>
		</section>
	);
}
