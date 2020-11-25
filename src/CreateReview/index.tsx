import React, { FormEvent, useState } from "react";
import reviewService from "../services/review.service";

import { Link } from "react-router-dom";
import { Review } from "../types";
const CreateReview: React.FC = () => {
	const [rating, setRating] = useState("5");
	const [ratingText, setRatingText] = useState("sdswd");
	const [message, setMessage] = useState<{
		text?: string;
		type?: string;
	}>({});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const review: Review = { text: ratingText, rating: Number(rating) };
		try {
			await reviewService.create(review);
			setMessage({
				type: "success",
				text: "Submitted successfully !",
			});

			setTimeout(() => {
				setMessage({});
			}, 5000);
		} catch (e) {
			console.log(e);

			setMessage({ type: "error", text: "oops, something went wrong!" });
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
					<h4 className="m-0">Create Review</h4>
					<small className="mb-2 d-block">
						Review made here updates your previous reviews, if any.
					</small>
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
									<Link to="/CreateReview">
										<small>Sign In</small>
									</Link>
								</button>
							)}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="rating">Rating</label>
						<select
							className="form-control"
							value={rating}
							required
							name="rating"
							id="rating"
							onChange={(e) => setRating(e.target.value)}
						>
							<option value="5">5</option>
							<option value="4">4</option>
							<option value="3">3</option>
							<option value="2">2</option>
							<option value="1">1</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="text">Review</label>
						<textarea
							cols={30}
							rows={10}
							className="form-control"
							name="text"
							id="text"
							required
							value={ratingText}
							onChange={(e) => setRatingText(e.target.value)}
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

export default CreateReview;
