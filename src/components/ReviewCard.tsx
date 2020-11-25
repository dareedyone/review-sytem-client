import React from "react";
const getStarGazers = (num: number) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const fillerArr = [...Array(num)];
	return fillerArr.map((v, i) => (
		<span key={i} className="float-right">
			<i className="text-warning fa fa-star"></i>
		</span>
	));
};

const ReviewCard: React.FC<{ status: string; rating: number }> = ({
	status,
	rating,
}) => {
	return (
		<div className="card my-2">
			<div className="card-body">
				<div className="row">
					<div className="col-md-2">
						<img
							src="https://image.ibb.co/jw55Ex/def_face.jpg"
							className="img img-rounded img-fluid"
						/>
						<p className="text-secondary text-center">15 Minutes Ago</p>
					</div>
					<div className="col-md-10">
						<p>
							<a href="https://maniruzzaman-akash.blogspot.com/p/contact.html">
								<strong>Maniruzzaman Akash</strong>
							</a>
							{getStarGazers(rating)}
						</p>
						<div className="clearfix"></div>
						<p>
							Lorem Ipsum is simply dummy text of the pr make but also the leap
							into electronic typesetting, remaining essentially unchanged. It
							was popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						{status === "approved" && (
							<p>
								<a className="float-right btn btn-outline-primary ml-2">
									{" "}
									<i className="fa fa-reply"></i> Reply
								</a>
								<a className="float-right btn text-white btn-danger">
									{" "}
									<i className="fa fa-heart"></i> Like
								</a>
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
