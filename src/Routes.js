import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import ThemeContext, { themes } from "./ThemeContext";

export default function BasicExample() {
	const [theme, setTheme] = useState(themes.light);

	const context = useContext(ThemeContext);

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
			<Switch>
				<Route exact path="/">
					<Home onToggle={onToggle} theme={theme} />
				</Route>
				<Route path="/movie/:id">
					<Movie onToggle={onToggle} theme={theme} />
				</Route>
			</Switch>
		</Router>
	);
}
