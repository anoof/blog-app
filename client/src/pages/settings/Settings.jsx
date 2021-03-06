import { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
import { Context } from "../../context/Context";
import { useState } from "react";
import { axiosInstance } from "../../config";

export default function Settings() {
	const { user, dispatch } = useContext(Context);
	const PF = "https://greenlight-blog.herokuapp.com/images/";
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: user._id,
			username,
			password,
			email,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;
			try {
				await axiosInstance.post("/upload", data);
			} catch (err) {}
		}
		try {
			const res = await axiosInstance.put("/users/" + user._id, updatedUser);
			setSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			setSuccess(false);
			dispatch({ type: "UPDATE_FAILURE" });
		}
	};

	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm" onSubmit={handleSubmit}>
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src={file ? URL.createObjectURL(file) : PF + user.profilePic}
							alt="preview"
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon far fa-user-circle"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<label>Username</label>
					<input
						type="text"
						placeholder={user.username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label>Email</label>
					<input
						type="email"
						placeholder={user.email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="settingsSubmit" type="submit">
						Update
					</button>
					{success && (
						<span
							style={{ color: "green", textAlign: "center", marginTop: "20px" }}
						>
							Profile has been updated successfully!
						</span>
					)}
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
