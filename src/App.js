import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import CreatePost from "./pages/createPost/CreatePost";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostViewPage from "./pages/postViewPage/PostViewPage";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";

function App() {
	const user = false;
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={user ? <Home /> : <Register />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route path="/create" element={user ? <CreatePost /> : <Register />} />
				<Route path="/settings" element={user ? <Settings /> : <Register />} />
				<Route path="/post/:postId" element={<PostViewPage />} />
			</Routes>
		</Router>
	);
}

export default App;
