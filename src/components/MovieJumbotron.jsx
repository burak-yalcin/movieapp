import { useHistory } from "react-router-dom";

export default function MovieJumbotron({ background, movie, theme }) {
	var style = {
		background: "url(" + background + ")",
		backgroundSize: "contain",
	};

	let history = useHistory();

	function handleClick() {
		history.push("/");
	}

	if (theme.color === "black") {
		var bg = "bg-dark";
		var text = "text-light";
		var border = "border border-success";
	} else {
		var bg = "bg-light";
		var text = "text-dark";
		var border = "";
	}

	return (
		<section className="movie-jumbotron text-left" style={style}>
			<div className="container-fluid offset-lg-3 pt-5">
				<div className="row">
					<div className="col-12 col-sm-6 ">
						<h1 className="display-6 font-weight-bold text-white">
							<div className="bg-success text-center rounded">
								{movie.original_title}
							</div>
						</h1>
					</div>
				</div>

				<div className="row mb-2">
					<div className="col-md-6">
						<div
							className={
								"card flex-md-row mb-4 box-shadow h-md-250 " + bg + " " + border
							}
						>
							<div className="card-body d-flex flex-column align-items-start">
								<div className="container-fluid p-0">
									{movie.genres &&
										movie.genres.map((genre) => {
											return (
												<strong className="mb-2 text-success">
													{"• " + genre.name + " "}
												</strong>
											);
										})}
								</div>

								<h3 className={"mb-0 my-3 " + text}>"{movie.tagline}"</h3>
								<p className={"card-text mb-auto " + text}>{movie.overview}</p>
								<div className="container-fluid p-0 d-flex">
									<p className="mb-1 text-success mr-2 font-weight-bold">
										<span class="badge badge-secondary">
											{movie.release_date}
										</span>
									</p>
									<p className="mb-1 text-gray mr-2 font-weight-bold">
										<span class="badge badge-secondary">
											{movie.runtime} min.
										</span>
									</p>
									<p className="mb-1 text-gray mr-2 text-uppercase font-weight-bold">
										<span class="badge badge-secondary">
											{movie.original_language}
										</span>
									</p>
									<p className="mb-1 text-gray text-uppercase font-weight-bold">
										<span class="badge badge-success">
											{movie.vote_average}/10
										</span>
									</p>
								</div>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block rounded-right"
								src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
								alt="Provide a valid, navigable address as the href value. If you cannot "
							/>
						</div>
					</div>
				</div>

				<p>
					<button
						className="btn btn-success mb-5 mt-2"
						type="button"
						onClick={handleClick}
					>
						Back
					</button>
				</p>
			</div>
		</section>
	);
}
