import React from "react";
import PostItem from "../PostItem/PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function PostList({posts, deletePost}) {
  return (
   <div className="post-list">
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post-item"
            >
            <PostItem deletePost={deletePost} key={post.id} post={post} />
            </CSSTransition>
        ))}
      </TransitionGroup>
   </div>
  )

}

export default PostList;
