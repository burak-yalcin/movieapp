import React from "react";

export default function Footer({ theme }) {
	if (theme.color === "black") {
		var bg = "bg-dark";
		var navbar = "navbar-dark";
		var text = "text-light";
		var bod;
	} else {
		var bg = "bg-light";
		var text = "text-dark";
		var navbar = "navbar-light";
	}

	return (
		<footer className={text + " border-top border-success " + bg}>
			<div className="container">
				<p className="float-right">
					<a href="#">Back to top</a>
				</p>
				<p>&copy; Burak Yalçın 2020</p>
				<p>
					For more projects and information:{" "}
					<a href="https://github.com/burak-yalcin">Github</a>
					{" | "}
					<a href="https://tr.linkedin.com/in/burakyalcin20">Linkedin</a>.
				</p>
			</div>
		</footer>
	);
}
