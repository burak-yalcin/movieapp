import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Card from "./Card";
import ThemeContext, { themes } from "../ThemeContext";
import ModalContext from "../ModalContext";

export default function MovieJumbotron({ background, movie, theme, similar }) {
	var style = {
		background: "url(" + background + ")",
		backgroundSize: "contain",
	};

	const { isOpen, setIsOpen } = useContext(ModalContext);

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

	const listSimilarMovies = similar.map((movie) => (
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
		<div>
			<section className="movie-jumbotron animate-area text-left" style={style}>
				<div className="container-fluid pt-5">
					<div className="row justify-content-center">
						<div className="col-12 col-sm-6 ">
							<h1 className="display-6 font-weight-bold text-white">
								<div className="bg-success text-center rounded">
									{movie.original_title}
								</div>
							</h1>
						</div>
					</div>

					<div className="row mb-2 justify-content-center">
						<div className="col-md-6">
							<div
								className={
									"card flex-md-row mb-4 box-shadow h-md-250 " +
									bg +
									" " +
									border
								}
							>
								<div className="card-body d-flex flex-column align-items-start">
									<div className="container-fluid p-0">
										{movie.genres &&
											movie.genres.map((genre) => {
												return (
													<strong className="mb-5 text-success">
														{"• " + genre.name + " "}
													</strong>
												);
											})}
									</div>

									{movie.tagline ? (
										<h3 className={"mb-0  " + text}>"{movie.tagline}"</h3>
									) : null}
									<p className={"card-text mt-3 mb-auto " + text}>
										{movie.overview}
									</p>
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

					<div className="container-fluid pt-5">
						<div className="row justify-content-center">
							<button
								className="btn btn-dark mb-5 mt-2 mr-2"
								type="button"
								onClick={handleClick}
							>
								Back
							</button>
							<button
								className="btn btn-success mb-5 mt-2"
								type="button"
								onClick={() => setIsOpen(true)}
							>
								Similar Movies
							</button>
						</div>
					</div>
				</div>
			</section>
			<Modal
				className="border border-success"
				size="lg"
				show={isOpen}
				centered
				onHide={() => setIsOpen(false)}
			>
				<div className="border border-success rounded">
					<Modal.Header closeButton className={bg + " " + text + "  "}>
						<Modal.Title>Similar Movies to {movie.original_title}</Modal.Title>
					</Modal.Header>
					<Modal.Body className={bg + " " + text}>
						<div className="row justify-content-center p-3">
							{similar.length != 0 ? (
								<div className="row">{listSimilarMovies}</div>
							) : (
								<p></p>
							)}
							{similar.length == 0 ? (
								<h1 className={"text-center " + text}>Movie not found.</h1>
							) : (
								<p></p>
							)}
						</div>
					</Modal.Body>
				</div>
			</Modal>
		</div>
	);
}
