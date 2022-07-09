import "./createPost.css";

export default function CreatePost() {
	return (
		<div className="createPost">
			<img
				className="createImg"
				src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt="preview"
			/>
			<form className="createForm">
				<div className="createFormGroup">
					<label htmlFor="fileInput">
						<i className="createIcon fa fa-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{ display: "none" }} />
					<input
						type="text"
						placeholder="Title"
						className="createInput"
						autoFocus
					/>
				</div>
				<div className="createFormGroup">
					<textarea
						className="createInput createText"
						type="text"
						placeholder="Tell your story..."
					></textarea>
				</div>
				<button className="createSubmit">Publish</button>
			</form>
		</div>
	);
}
