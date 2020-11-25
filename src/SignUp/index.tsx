import React, { FormEvent, useState } from "react";
import userService from "../services/user.service";
import { User } from "../types";
import { setTimeout } from "timers";
import { Link } from "react-router-dom";
const SignIn: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState<{
		text?: string;
		type?: string;
	}>({});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const newUser: User = { username, name, password };
		try {
			await userService.create(newUser);
			setMessage({
				type: "success",
				text: "Registration successful, sign in",
			});
			setUsername("");
			setPassword("");
			setTimeout(() => {
				setMessage({});
			}, 5000);
		} catch (e) {
			console.log(e);

			setMessage({ type: "error", text: "Credentials already exist !" });
			setTimeout(() => {
				setMessage({});
			}, 5000);
		}
	};
	return (
		<section style={{ backgroundColor: "#1E3B4C" }}>
			<div
				style={{ padding: "100px 0" }}
				className="bg-white d-flex justify-content-center"
			>
				<form onSubmit={handleSubmit} className="mw-50">
					<h4>Sign Up</h4>
					<div
						className="mb-3"
						style={{
							border: "1px solid black",
							color: message.type === "error" ? "red" : "green",
							display: Object.keys(message).length > 1 ? "block" : "none",
						}}
					>
						<div className="d-flex justify-content-between d-block">
							<div className="px-2">
								<small className="">{message.text}</small>
							</div>
							{message?.type === "success" && (
								<button style={{ backgroundColor: "#1E3B4C", color: "white" }}>
									<Link to="/signin">
										<small>Sign In</small>
									</Link>
								</button>
							)}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="username">Fullname</label>
						<input
							type="text"
							className="form-control"
							id="name"
							aria-describedby="nameHelp"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							className="form-control"
							id="username"
							aria-describedby="usernameHelp"
							required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<small id="detailsHelp" className="form-text text-muted">
							We&apos;ll never share your details with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default SignIn;
