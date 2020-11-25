import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserWithToken } from "../types";
// import useStorageValue from "../hooks/useStorageValue";
const Navbar: React.FC = () => {
	// const user = useStorageValue(update);

	const [user, setUser] = useState<UserWithToken | null | false>(null);
	// const [update, setUpdate] = useState<boolean>(false);
	useEffect(() => {
		console.log("app renders");
		const data = localStorage.getItem("rv-usr");
		const userFromStorage =
			typeof data === "string" && (JSON.parse(data) as UserWithToken | null);
		console.log("userFromStrogee", userFromStorage);

		setUser(userFromStorage);
	}, []);

	const history = useHistory();
	const handleLogOut = () => {
		console.log("logout clicked");

		localStorage.removeItem("rv-usr");
		setTimeout(() => {
			history.push("/");
		}, 10000);
	};
	return (
		<header id="header" className="fixed-top header-transparent">
			<div className="container text-dark">
				<div className="logo float-left">
					<h1 className="text-light">
						<Link to="/">
							<span>FicCom</span>
						</Link>
					</h1>
				</div>

				<nav className="nav-menu float-right d-none d-lg-block">
					<ul>
						{!user && (
							<li className="active">
								<Link to="/">Home</Link>
							</li>
						)}
						{user && (
							<>
								<li>
									<Link to="/reviews">Reviews</Link>
								</li>
								<li>
									<Link to="/create-review">Create Review</Link>
								</li>
								<li>
									<button
										onClick={handleLogOut}
										className="btn btn-warning px-1 mt-2  ml-4"
									>
										<small>Log Out</small>
									</button>
								</li>
							</>
						)}

						{!user && (
							<>
								<li>
									<Link to="/signin">Sign In</Link>
								</li>
								<li>
									<Link to="/signup">Sign Up</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
