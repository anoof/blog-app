import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function NavBar() {
	const { user, dispatch } = useContext(Context);
	const PF = "http://localhost:5000/images/";
	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<div className="nav">
			<div className="navLeft">
				<i className="navIcon fa-brands fa-facebook-square"></i>
				<i className="navIcon fa-brands fa-twitter-square"></i>
				<i className="navIcon fa-brands fa-pinterest-square"></i>
				<i className="navIcon fa-brands fa-instagram-square"></i>
			</div>
			<div className="navCenter">
				<ul className="navList">
					<li className="navListItem">
						<Link to="/" className="links">
							HOME
						</Link>
					</li>
					<li className="navListItem">
						<Link to="/" className="links">
							ABOUT
						</Link>
					</li>
					<li className="navListItem">
						<Link to="/" className="links">
							CONTACT
						</Link>
					</li>
					<li className="navListItem">
						<Link to="/create" className="links">
							WRITE
						</Link>
					</li>
					<li className="navListItem" onClick={handleLogout}>
						{user && "LOGOUT"}
					</li>
				</ul>
			</div>
			<div className="navRight">
				{user ? (
					<Link to="/settings">
						<img className="navImg" src={PF + user.profilePic} alt="profile" />
					</Link>
				) : (
					<ul className="navList">
						<li className="navListItem">
							<Link to="/login" className="links">
								LOGIN
							</Link>
						</li>
						<li className="navListItem">
							<Link to="/register" className="links">
								REGISTER
							</Link>
						</li>
					</ul>
				)}
				<i className="navSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
