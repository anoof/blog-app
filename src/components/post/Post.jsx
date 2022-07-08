import "./post.css";

export default function Post() {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt="Post"
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Life</span>
					<span className="postCat">Music</span>
				</div>
				<span className="postTitle">Lorem ipsum dolor sit amet</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				distinctio sint molestiae vero, numquam quod quos voluptate ea saepe
				nisi cupiditate. Iusto adipisci pariatur ex! Impedit inventore
				voluptatibus sed maxime!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				distinctio sint molestiae vero, numquam quod quos voluptate ea saepe
				nisi cupiditate. Iusto adipisci pariatur ex! Impedit inventore
				voluptatibus sed maxime!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				distinctio sint molestiae vero, numquam quod quos voluptate ea saepe
				nisi cupiditate. Iusto adipisci pariatur ex! Impedit inventore
				voluptatibus sed maxime!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				distinctio sint molestiae vero, numquam quod quos voluptate ea saepe
				nisi cupiditate. Iusto adipisci pariatur ex! Impedit inventore
				voluptatibus sed maxime!
			</p>
		</div>
	);
}
