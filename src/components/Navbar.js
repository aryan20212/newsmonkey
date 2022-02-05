import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	let { title } = props;
	return (
		<div>
			<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						{title}
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/business" className="nav-link">
									Business
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/entertainment" className="nav-link">
									Entertainment
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/health" className="nav-link">
									Health
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/science" className="nav-link">
									Science
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/sports" className="nav-link">
									Sports
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/technology" className="nav-link">
									Technology
								</Link>
							</li>
						</ul>
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;
