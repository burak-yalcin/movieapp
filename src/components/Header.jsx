import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header({ onToggle, theme }) {
	if (theme.color === "black") {
		var bg = "bg-dark";
		var btn = "btn-light";
		var navbar = "navbar-dark";
		var text = "text-light";
	} else {
		var bg = "bg-light";
		var btn = "btn-dark";

		var text = "text-dark";
		var navbar = "navbar-light";
	}

	const node = useRef();

	useEffect(() => {
		// add when mounted
		document.addEventListener("mousedown", handleClick); // return function to be called when unmounted
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, []);

	const handleClick = (e) => {
		if (node.current.contains(e.target)) {
			return;
		}
		window.$(".collapse").collapse("hide");
	};

	return (
		<header ref={node}>
			<div className={"collapse " + bg} id="navbarHeader">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 col-md-7 py-4">
							<h4 className={text}>About</h4>
							<p className={text}>
								This project was made within the scope of{" "}
								<a href="https://kodluyoruz.org">Kodluyoruz Bootcamp</a> by
								using React, Bootstrap and{" "}
								<a href="https://developers.themoviedb.org/3">
									The Movie DataBase (TMDB)
								</a>{" "}
								Public API.
							</p>
						</div>
						<div className="col-sm-4 offset-md-1 py-4">
							<h4 className={text}>Contact</h4>
							<ul className="list-unstyled">
								<li>
									<a href="https://github.com/burak-yalcin" className={text}>
										Follow on Github
									</a>
								</li>
								<li>
									<a
										href="https://tr.linkedin.com/in/burakyalcin20"
										className={text}
									>
										Like on Linkedin
									</a>
								</li>
								<li>
									<a href="#" className={text}>
										Email me
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div
				className={
					"navbar box-shadow border-bottom border-success " + navbar + " " + bg
				}
			>
				<div className="container d-flex justify-content-between">
					<Link to={"/"}>
						<div className="navbar-brand d-flex align-items-center">
							<strong>Moovie</strong>
						</div>
					</Link>
					<div>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarHeader"
							aria-controls="navbarHeader"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<button
							className={"btn btn-sm ml-2 " + btn}
							onClick={() => onToggle()}
						>
							{theme.color === "black" ? "Light" : "Dark"}
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
