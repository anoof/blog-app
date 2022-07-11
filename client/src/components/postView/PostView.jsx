import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./postview.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function PostView() {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const picsUrl = "http://localhost:5000/images/";
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get("/posts/" + path);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPost();
	}, []);

	const handleDelete = async () => {
		try {
			await axios.delete("/posts/" + path, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (err) {}
	};

	const handleUpdate = async () => {
		try {
			await axios.put("/posts/" + path, {
				username: user.username,
				title,
				desc,
			});
			setUpdateMode(false);
		} catch (err) {}
	};

	return (
		<div className="postView">
			<div className="postViewWrapper">
				{post.photo && (
					<img className="postViewImg" src={picsUrl + post.photo} alt="" />
				)}
				{updateMode ? (
					<input
						type="text"
						value={title}
						className="postViewTitleInput"
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<h1 className="postViewTitle">
						{title}
						{post.username === user?.username && (
							<div className="postViewEdit">
								<i
									className="postViewIcon far fa-edit"
									onClick={() => setUpdateMode(true)}
								></i>
								<i
									className="postViewIcon far fa-trash-alt"
									onClick={handleDelete}
								></i>
							</div>
						)}
					</h1>
				)}
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
				{updateMode ? (
					<textarea
						className="postViewDescInput"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				) : (
					<p className="postViewDesc">{desc}</p>
				)}
				{updateMode && (
					<button className="postViewButton" onClick={handleUpdate}>
						Update
					</button>
				)}
			</div>
		</div>
	);
}
