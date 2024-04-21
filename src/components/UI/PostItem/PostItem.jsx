import React from "react";
import MyButton from "../Button/MyButton";
import './PostItem.css'
import { useNavigate } from "react-router-dom";

function PostItem({post, deletePost}) {
   const {title, body, id} = post;
	const navigate = useNavigate()
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
				<div className="post__content btns">
					<MyButton onClick={() => navigate(`/posts/${id}`)} className="my-button add"> Открыть </MyButton>
					<MyButton onClick={() => deletePost(id)} className="my-button delete"> Удалить </MyButton>
				</div>
			</div>
  )
}

export default PostItem;
