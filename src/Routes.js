import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { themes } from "./ThemeContext";
import ModalContext from "./ModalContext";

export default function BasicExample() {
	const [theme, setTheme] = useState(themes.light);
	const [isOpen, setIsOpen] = useState(false);
	const value = { isOpen, setIsOpen };

	function onToggle() {
		if (theme === themes.dark) {
			setTheme(themes.light);
		} else {
			setTheme(themes.dark);
		}
	}

	return (
		<Router>
			<ScrollToTop />
			<ModalContext.Provider value={value}>
				<Switch>
					<Route exact path="/">
						<Home onToggle={onToggle} theme={theme} />
					</Route>
					<Route exact path="/movie/:id">
						<Movie onToggle={onToggle} theme={theme} />
					</Route>
				</Switch>
			</ModalContext.Provider>
		</Router>
	);
}
