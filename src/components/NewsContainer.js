import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem.js";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsContainer = (props) => {
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);
	const [pagesize, setPageSize] = useState(6);
	const [totalresults, setTotalresults] = useState(6);
	const API_KEY = "2b2b8532ee604d539876fef7bbede07b";
	useEffect(() => {
		updateNews();
		//eslint-disable-next-line
	}, []);

	const updateNews = async () => {
		props.setProgress(40);
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${API_KEY}&page=${page}&pagesize=${pagesize}`;

		let data = await fetch(url);
		props.setProgress(50);
		let dataJson = await data.json();
		props.setProgress(80);
		setArticles(articles.concat(dataJson.articles));
		setTotalresults(dataJson.totalResults);
		setPageSize(Math.ceil(dataJson.totalResults / pagesize));

		props.setProgress(100);
	};
	const fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${
			props.country
		}&category=${props.category}&apiKey=${API_KEY}&page=${
			page + 1
		}&pagesize=${pagesize}`;

		setPage(page + 1);
		let data = await fetch(url);
		let dataJson = await data.json();
		setArticles(articles.concat(dataJson.articles));

		setTotalresults(dataJson.totalResults);
	};

	return (
		<>
			<h1
				className="text-center "
				style={{ marginTop: "80px", marginBottom: "42px", fontSize: "32px" }}
			>
				NewsMonkey | {!props.type ? "Top Headlines" : props.type}{" "}
			</h1>
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalresults - 1}
				loader={<Spinner />}
			>
				<div className="d-flex flex-wrap">
					{articles.map((element) => (
						<NewsItem
							key={element.url}
							title={element.title}
							author={element.author}
							source={element.source.name}
							publishedAt={element.publishedAt}
							description={element.description}
							url={element.url}
							urlToImage={element.urlToImage}
						/>
					))}
				</div>
			</InfiniteScroll>
		</>
	);
};

NewsContainer.defaultProps = {
	country: "in",
	category: "general",
};
NewsContainer.propTypes = {
	country: PropTypes.string,
	category: PropTypes.string,
};

export default NewsContainer;
