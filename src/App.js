import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PostList from "./components/UI/PostList/PostList";

function App() {

	const [posts, setPosts] = useState([]);
	const [postsLoading, setPostsLoading] = useState(true)

	const fetchPosts = async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
		setPosts(response.data)
		setPostsLoading(false)
	}

	useEffect(() => {
		fetchPosts()
	}, [])

  return (
	<div className="App">
	{postsLoading ? <h2> Please, wait for posts to load...</h2> : <PostList posts={posts} /> }
	</div>
)
}

export default App;
