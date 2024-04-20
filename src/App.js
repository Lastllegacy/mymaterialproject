import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PostList from "./components/UI/PostList/PostList";
import PostForm from "./components/UI/PostForm/PostForm";
import MyButton from "./components/UI/MyButton/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {

	const [posts, setPosts] = useState([]);
	const [postsLoading, setPostsLoading] = useState(true);
	const [isModal, setIsModal] = useState(false);

	const fetchPosts = async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: 10
			}
		})
		setPosts(response.data)
		setPostsLoading(false)
	}

	const addPost = (newPost) => {
		const arrPosts = posts.map(post => ({...post,id: post.id+1,}));
		setPosts([{...newPost, id:1}, ...arrPosts])
		setIsModal(!isModal)
	}

	const deletePost = (id) => {
		setPosts(posts.filter(post => post.id !== id))
	}

	const closeModal = () => {
		setIsModal(!isModal)
	}

	useEffect(() => {
		fetchPosts()
	}, [])

  return (
	<div className="App">
	{isModal ? <MyModal closeModal={closeModal} addPost={addPost} /> : ""}
	<MyButton 
		onClick={() => setIsModal(true)} 
		className="modal-open"
	> Добавить пост </MyButton>
	{postsLoading ? <h2> Please, wait for posts to load...</h2> : <PostList deletePost={deletePost} posts={posts} /> }
	</div>
)
}

export default App;
