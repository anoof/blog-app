import "./postview.css";

export default function PostView() {
	return (
		<div className="postView">
			<div className="postWrapper">
				<img
					className="postViewImg"
					src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
				/>
				<h1 className="postViewTitle">
					Lorem ipsum dolor sit
					<div className="postViewEdit">
						<i className="postViewIcon far fa-edit"></i>
						<i className="postViewIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="postViewInfo">
					<span className="postViewAuthor">
						Author: <b>Anoof Shaikh</b>
					</span>
					<span className="postViewDate">1 hour ago</span>
				</div>
				<p className="postViewDesc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus
					dolore adipisci sequi impedit veritatis omnis possimus tempora
					corporis dolores? Et obcaecati iure magni fugiat at voluptates
					suscipit laborum illo!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus
					dolore adipisci sequi impedit veritatis omnis possimus tempora
					corporis dolores? Et obcaecati iure magni fugiat at voluptates
					suscipit laborum illo!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus
					dolore adipisci sequi impedit veritatis omnis possimus tempora
					corporis dolores? Et obcaecati iure magni fugiat at voluptates
					suscipit laborum illo!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus
					dolore adipisci sequi impedit veritatis omnis possimus tempora
					corporis dolores? Et obcaecati iure magni fugiat at voluptates
					suscipit laborum illo!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus
					dolore adipisci sequi impedit veritatis omnis possimus tempora
					corporis dolores? Et obcaecati iure magni fugiat at voluptates
					suscipit laborum illo!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus
					dolore adipisci sequi impedit veritatis omnis possimus tempora
					corporis dolores? Et obcaecati iure magni fugiat at voluptates
					suscipit laborum illo!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus
					dolore adipisci sequi impedit veritatis omnis possimus tempora
					corporis dolores? Et obcaecati iure magni fugiat at voluptates
					suscipit laborum illo!
				</p>
			</div>
		</div>
	);
}
