import Post from "../post/Post"
import "./postcontainer.css"

export default function PostContainer({posts}) {
  return (
    <div className="postContainer">
      {posts.map((p) => (
        <Post post={p}/>
      ))}
    </div>
  )
}
