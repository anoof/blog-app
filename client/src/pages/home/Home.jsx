import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import PostContainer from "../../components/postcontainer/PostContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { axiosInstance } from "../../config";
import { useLocation } from "react-router-dom";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const {search} = useLocation();

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axiosInstance.get("/posts" + search);
			setPosts(res.data);
		};
		fetchPosts();
	},[search]);
	return (
		<>
			<Header />
			<div className="home">
                <PostContainer posts={posts} />
                <Sidebar />
            </div>
		</>
	);
}
