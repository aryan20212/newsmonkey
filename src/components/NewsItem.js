import React from "react";

const NewsItem = (props) => {
	let { title, description, url, urlToImage, author, source, publishedAt } =
		props;
	let publishDate = new Date(publishedAt);
	let date = GetDateInFormat(publishDate);
	function GetDateInFormat(date) {
		let monthsArr = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"June",
			"July",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		let months = monthsArr[date.getMonth()];
		let day = date.getDate();
		let year = date.getFullYear();
		let amOrpm = date.getHours() > 11 ? "pm" : "am";
		let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
		let minutes = date.getMinutes();
		let CompleteDate = `${months} ${day}, ${year} ${hours}:${minutes} ${amOrpm}`;
		return CompleteDate;
	}
	let sHortDesc =
		description !== null
			? description.slice(0, 6000) + "..."
			: "No description Of this news";
	let sHortTitle = title !== null ? title.slice(0, 300) + "..." : "";
	return (
		<>
			<div className="card m-3" style={{ width: "24rem" }}>
				<img
					src={
						!urlToImage
							? "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
							: urlToImage
					}
					style={{ height: "250px" }}
					className="card-img-top"
					alt={title}
				/>
				<div className="card-body">
					<h5 className="card-title">{sHortTitle}</h5>
					<p className="card-text">{sHortDesc}</p>
					<p className="card-text">
						<small className="text-muted">
							By {!author ? "Unknown" : author} at {date}
						</small>
					</p>
					<span
						className="position-absolute py-2 translate-middle badge rounded-pill bg-danger"
						style={{ left: "90%", top: "0px", zIndex: "1" }}
					>
						{source}
					</span>
					<a
						href={url}
						rel="noreferrer"
						target="_blank"
						className="btn btn-sm btn-dark"
					>
						Read More
					</a>
				</div>
			</div>
		</>
	);
};

export default NewsItem;
