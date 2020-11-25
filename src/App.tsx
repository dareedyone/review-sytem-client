import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Reviews from "./Reviews";
import AdminReview from "./AdminReview";
import CreateReview from "./CreateReview";
// import { UserWithToken } from "./types";
import useStorageValue from "./hooks/useStorageValue";

const App: React.FC = () => {
	const user = useStorageValue();
	// const [user, setUser] = useState<UserWithToken | null | false>(null);
	// const [update, setUpdate] = useState<boolean>(false);
	// useEffect(() => {
	// 	console.log("app renders");
	// 	const data = localStorage.getItem("rv-usr");
	// 	const userFromStorage =
	// 		typeof data === "string" && (JSON.parse(data) as UserWithToken | null);
	// 	console.log("userFromStrogee", userFromStorage);

	// 	setUser(userFromStorage);
	// }, [update]);

	return (
		<div>
			<Navbar />

			<Switch>
				<Route
					path="/signup"
					render={() => (user ? <Redirect to="/reviews" /> : <SignUp />)}
				/>
				<Route
					path="/signin"
					render={() => (user ? <Redirect to="/reviews" /> : <SignIn />)}
				/>

				<Route
					path="/reviews"
					render={() => (!user ? <Redirect to="/" /> : <Reviews />)}
				/>
				{/* <Route
					path="/reviews"
					render={() => {
						setUpdate(true);
						return !user ? <Redirect to="/" /> : <Reviews />;
					}}
				/> */}
				<Route
					path="/create-review"
					render={() => (!user ? <Redirect to="/" /> : <CreateReview />)}
				/>
				<Route
					path="/admin-review"
					render={() =>
						typeof user === "object" && user?.type !== "admin" ? (
							<Redirect to="/" />
						) : (
							<AdminReview />
						)
					}
				/>

				<Route
					path="/"
					render={() => (user ? <Redirect to="/reviews" /> : <Home />)}
				/>
			</Switch>
		</div>
	);
};

export default App;
