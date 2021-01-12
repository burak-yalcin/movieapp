import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ModalContext from "../ModalContext";

export default function Card({ image, title, id, popularity, theme }) {
	if (theme.color === "black") {
		var bg = "bg-dark";
		var text = "text-light";
		var border = "border border-success";
	} else {
		var bg = "bg-light";
		var text = "text-dark";
		var border = "";
	}

	const { setIsOpen } = useContext(ModalContext);

	return (
		<div className="col-md-3 ">
			<div className={"card mb-4 box-shadow " + bg + " " + text + " " + border}>
				<img
					className="card-img-top"
					src={"https://image.tmdb.org/t/p/w500" + image}
					alt={title}
				/>
				<div className="card-body">
					<p className="card-text">{title}</p>
					<div className="d-flex justify-content-between align-items-baseline">
						<Link to={"/movie/" + id}>
							<button
								type="button"
								onClick={() => setIsOpen(false)}
								className="btn btn-sm btn-outline-success"
							>
								View
							</button>
						</Link>
						<span className="badge badge-success mb-3">
							{Math.floor(popularity)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.defaultProps = {
	image: "/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg",
};
