import { useContext } from "react";
import { useState } from "react";
import "./createPost.css";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

export default function CreatePost() {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const { user } = useContext(Context);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			title,
			desc,
			username: user.username,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			newPost.photo = filename;
			try {
				await axiosInstance.post("/upload", data);
			} catch (err) {}
		}
		try {
			const res = await axiosInstance.post("/posts", newPost);
			window.location.replace("/post/" + res.data._id);
		} catch (err) {}
	};
	return (
		<div className="createPost">
			{file ? (
				<img
					className="createImg"
					src={URL.createObjectURL(file)}
					alt="preview"
				/>
			) : (
				<img
					className="createImg"
					src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt="preview"
				/>
			)}
			<form className="createForm" onSubmit={handleSubmit}>
				<div className="createFormGroup">
					<label htmlFor="fileInput">
						<i className="createIcon fa fa-plus"></i>
					</label>
					<input
						type="file"
						id="fileInput"
						style={{ display: "none" }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<input
						type="text"
						placeholder="Title"
						className="createInput"
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="createFormGroup">
					<textarea
						className="createInput createText"
						type="text"
						placeholder="Tell your story..."
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</div>
				<button className="createSubmit" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
}
