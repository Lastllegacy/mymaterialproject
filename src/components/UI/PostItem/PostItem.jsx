import React from "react";
import MyButton from "../MyButton/MyButton";
import './PostItem.css'

function PostItem({post}) {
   const {title, body, id} = post;
  return (
         <div className="post">
				<div className="post__content">
					<div className="post__header">
						{id}. {title}
					</div>
					<div className="post__body">
						{body}
					</div>
				</div>
				<div className="post__content">
					<MyButton> Удалить </MyButton>
				</div>
			</div>
  )
}

export default PostItem;
