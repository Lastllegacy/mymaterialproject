import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PostList from "./components/UI/PostList/PostList";
import PostForm from "./components/UI/PostForm/PostForm";

function App() {

	const [posts, setPosts] = useState([]);
	const [postsLoading, setPostsLoading] = useState(true);

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
	}

	const deletePost = (id) => {
		setPosts(posts.filter(post => post.id !== id))
	}

	useEffect(() => {
		fetchPosts()
	}, [])

  return (
	<div className="App">
	<div className="my-modal"> </div>
	<PostForm addPost={addPost} />
	{postsLoading ? <h2> Please, wait for posts to load...</h2> : <PostList deletePost={deletePost} posts={posts} /> }
	</div>
)
}

export default App;
