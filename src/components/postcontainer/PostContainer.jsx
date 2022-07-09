import Post from "../post/Post"
import "./postcontainer.css"

export default function PostContainer() {
  return (
    <div className="postContainer">
      <Post postId={1}/>
      <Post postId={2}/>
      <Post postId={3}/>
      <Post postId={4}/>
      <Post postId={5}/>
      <Post postId={6}/>
    </div>
  )
}
