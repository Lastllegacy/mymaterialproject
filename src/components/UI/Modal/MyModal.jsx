import React from "react";
import PostForm from "../PostForm/PostForm";
import './MyModal.css';
import MyButton from "../Button/MyButton";

function MyModal({addPost, closeModal}) {
  return (
   <div className="my-modal-window" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} >
         <MyButton onClick={closeModal} className="modal-close-element" > X </MyButton>
         <PostForm addPost={addPost} />
      </div>
   </div>
  )
}

export default MyModal;
