import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
	const picsUrl = "https://greenlight-blog.herokuapp.com/images/";
	return (
		<div className="post">
			{post.photo ? (
				<img className="postImg" src={picsUrl + post.photo} alt="Post" />
			) : (
				<img
					className="postImg"
					src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt="Post"
				/>
			)}
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Life</span>
					<span className="postCat">Music</span>
				</div>
				<Link to={`/post/${post._id}`} className="links">
					<span className="postTitle">{post.title}</span>
				</Link>
				<hr />
				<span className="postDate">
					{new Date(post.createdAt).toDateString()}
				</span>
			</div>
			<p className="postDesc">{post.desc}</p>
		</div>
	);
}
