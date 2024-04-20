import React from "react";
import PostItem from "../PostItem/PostItem";

function PostList({posts, deletePost}) {
  return (
   <div className="post-list">
      {posts.map((post) => <PostItem deletePost={deletePost} key={post.id} post={post} />)}
   </div>
  )

}

export default PostList;
