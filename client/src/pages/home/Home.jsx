import Header from "../../components/header/Header";
import PostContainer from "../../components/postcontainer/PostContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function home() {
	return (
		<>
			<Header />
			<div className="home">
                <PostContainer />
                <Sidebar />
            </div>
		</>
	);
}
