import React, { useState } from "react";

export default function Jumbotron({ movie, onSubmit }) {
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

	return (
		<section className="jumbotron text-center " style={style}>
			<div className="container">
				<h3>
					<span className="badge badge-success mb-3">Popular Today</span>
					<span className="badge badge-danger mb-3 ml-3">
						{movie.vote_average}
					</span>
				</h3>

				<h1 className="display-4 font-weight-bold bg-success rounded text-white ">
					{movie.title}
				</h1>
				<p className="lead text-white mt-3 font-weight-bold">
					{movie.overview}
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
					onClick={() => onSubmit(searchInput)}
				/>
			</div>
		</section>
	);
}
