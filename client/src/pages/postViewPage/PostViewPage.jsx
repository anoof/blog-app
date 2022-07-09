import PostView from "../../components/postView/PostView";
import Sidebar from "../../components/sidebar/Sidebar";
import "./postviewpage.css";

export default function PostViewPage() {
  return (
    <div className="postViewPage">
        <PostView />
        <Sidebar />
    </div>
  )
}
