import React from "react";
import ReviewCard from "../components/ReviewCard";
// import userService from "../services/user.service";
// import { User } from "../types";
// import { Link } from "react-router-dom";
const Reviews: React.FC = () => {
	return (
		<div style={{ backgroundColor: "#1E3B4C", paddingTop: "60px" }}>
			<div className="bg-white">
				<div className="container">
					<div className="pt-5">
						<h4 className="text-center mb-3">Reviews</h4>

						<ReviewCard status={"pending"} rating={2} />
						<ReviewCard status={"pending"} rating={4} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
