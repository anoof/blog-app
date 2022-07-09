import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
	const user = false;
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
						<Link to="/about" className="links">
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
					<li className="navListItem">
						<Link to="/" className="links">
							LOGOUT
						</Link>
					</li>
				</ul>
			</div>
			<div className="navRight">
				{user ? (
					<img
						className="navImg"
						src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt="search"
					/>
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
