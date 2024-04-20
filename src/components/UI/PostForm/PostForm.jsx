import React, { useState } from "react";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import './PostForm.css';

function PostForm({addPost}) {

   const [newPost, setNewPost] = useState({
		title: "",
		body: "",
		id: "",
	})

   const createPost = () => {
      addPost(newPost);
      setNewPost({title: "", body: "", id: ""});
   }


  return (
   <div className="post-form" >
		<div className="post-add-header"> Интерфейс добавления поста </div>
		<MyInput 
         className="input-text title"
         placeholder="Введите название поста" 
         value={newPost.title} 
         onChange={(e) => setNewPost({...newPost, title: e.target.value})}  
      />
		<MyInput 
         className="input-text body"
         placeholder="Введите описание поста" 
         value={newPost.body} 
         onChange={(e) => setNewPost({...newPost, body: e.target.value})} 
      /> 
		<MyButton className="my-button add" onClick={createPost} > Добавить пост </MyButton>
	</div>
  )
}

export default PostForm;
