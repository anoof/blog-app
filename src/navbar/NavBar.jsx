import "./navbar.css";

export default function NavBar() {
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
					<li className="navListItem">HOME</li>
					<li className="navListItem">ABOUT</li>
					<li className="navListItem">CONTACT</li>
					<li className="navListItem">WRITE</li>
					<li className="navListItem">LOGOUT</li>
				</ul>
			</div>
			<div className="navRight">
				<img
                    className="navImg"
					src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt="search"
				/>
                <i className="navSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
