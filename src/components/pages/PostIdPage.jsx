import React, { useEffect, useState } from "react";
import Loader from "../UI/Loader/Loader";
import { useParams } from "react-router-dom";
import { PostService } from "../Service/PostService";

function PostIdPage() {
   const params = useParams();
   const [isLoaded, setisLoaded] = useState(false);
   const [error, setError] = useState("");
   const [post, setPost] = useState ({});

   const fetchPost = async () => {
		try {
         setisLoaded(true);
			const response = await PostService.getPostById(params.id);
         console.log(response.data);
			setPost(response.data);
		} catch(e) {
			setError(e.message)
		} finally {
			setisLoaded(false)
		}
	}

   useEffect(() => {
      fetchPost()
   }, [])

  return ( 
  <>
         {isLoaded  ? <Loader />   :  (<div className="post-full" >
               <h2 style={{marginTop:15}}> {post.title} </h2>
               <div style={{marginTop:15, border:"1px solid black"}}> {post.body} </div>
            </div>)}
   </>
  )
}


export default PostIdPage;
