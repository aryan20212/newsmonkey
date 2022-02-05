import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import NewsContainer from "./components/NewsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react/cjs/react.development";
const App = () => {
	const [progress, setprogress] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Navbar title="NewsMonkey" />
				<LoadingBar
					color="#212529"
					progress={progress}
					onLoaderFinished={() => setprogress(0)}
				/>
				<div className="container">
					<Routes>
						<Route
							path="/"
							element={
								<NewsContainer
									setProgress={setprogress}
									key="general"
									type="General News"
									country="in"
								/>
							}
						/>

						<Route
							path="/business"
							element={
								<NewsContainer
									setProgress={setprogress}
									type="Business Related News"
									key="business"
									category="business"
									country="in"
								/>
							}
						/>
						<Route
							path="/entertainment"
							element={
								<NewsContainer
									setProgress={setprogress}
									type="Entertainment Related News"
									key="entertainment"
									category="entertainment"
									country="in"
								/>
							}
						/>
						<Route
							path="/health"
							element={
								<NewsContainer
									setProgress={setprogress}
									type="Health Related News"
									key="health"
									category="health"
									country="in"
								/>
							}
						/>
						<Route
							path="/science"
							element={
								<NewsContainer
									setProgress={setprogress}
									type="Science Related News"
									key="science"
									category="science"
									country="in"
								/>
							}
						/>
						<Route
							path="/sports"
							element={
								<NewsContainer
									setProgress={setprogress}
									type="Sports Related News"
									key="sports"
									category="sports"
									country="in"
								/>
							}
						/>
						<Route
							path="/technology"
							element={
								<NewsContainer
									setProgress={setprogress}
									type="Technology Related News"
									key="technology"
									category="technology"
									country="in"
								/>
							}
						/>
						<Route
							path="*"
							element={
								<NewsContainer setProgress={setprogress} key="" country="in" />
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
