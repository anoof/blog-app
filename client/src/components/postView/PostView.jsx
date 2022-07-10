import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./postview.css";
import axios from "axios";

export default function PostView() {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get("/posts/" + path);
			setPost(res.data);
		};
		getPost();
	}, []);
	return (
		<div className="postView">
			<div className="postWrapper">
				{post.photo && <img className="postViewImg" src={post.photo} alt="" />}
				<h1 className="postViewTitle">
					{post.title}
					<div className="postViewEdit">
						<i className="postViewIcon far fa-edit"></i>
						<i className="postViewIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="postViewInfo">
					<span className="postViewAuthor">
						Author:
						<Link to={`/?user=${post.username}`} className="links">
							<b>{post.username}</b>
						</Link>
					</span>
					<span className="postViewDate">
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				<p className="postViewDesc">{post.desc}</p>
			</div>
		</div>
	);
}
