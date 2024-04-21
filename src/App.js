import { useEffect, useMemo, useState } from "react";
import "./App.css";
import axios from "axios";
import PostList from "./components/UI/PostList/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyModal from "./components/UI/Modal/MyModal";
import { useSortAndSearchPosts } from "./components/MyHooks/usePosts";
import PostFilter from "./components/UI/PostFilter/PostFilter";
import Pagination from "./components/UI/Pagination/Pagination";
import Loader from "./components/UI/Loader/Loader";

function App() {

	const [posts, setPosts] = useState([]);
	const [postsLoading, setPostsLoading] = useState(true);
	const [isModal, setIsModal] = useState(false);
   const [filter, setFilter] = useState({sortOption: "" , query: ""});
	const sortAndSearchPosts = useSortAndSearchPosts(posts, filter.sortOption, filter.query);
	const [error, setError] = useState('');
	const [totalCount, setTotalCount] = useState(0);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);

	const getPagesArray = (totalCount) => {
		const arrayPagesHelper = [];
		for(let i=0; i< totalCount / limit; i++) {
			arrayPagesHelper.push(i)
		}
		return arrayPagesHelper
	}
 
	const fetchPosts = async (limit, page) => {
		try {
			setPostsLoading(true)
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_limit: limit,
					_page: page,
				}
			})
			setPosts(response.data);
			setTotalCount(response.headers['x-total-count']);

		} catch(e) {
			setError(e.message)
		} finally {
			setPostsLoading(false)
		}
		
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
		fetchPosts(limit, page)
	}, [limit, page]);

	const pagesArray = useMemo(() => {
		return getPagesArray(totalCount)
	}, [totalCount])

  return (
	<div className="App">
		{isModal ? <MyModal closeModal={closeModal} addPost={addPost} /> : ""}
		<MyButton 
			onClick={() => setIsModal(true)} 
			className="modal-open"
		> Добавить пост 
		</MyButton>
		<hr style={{marginTop:15}} />
		<PostFilter filter={filter} setFilter={setFilter} />
		{postsLoading ? <Loader /> : (<PostList deletePost={deletePost} posts={sortAndSearchPosts} />)}
		<Pagination page={page} setPage={setPage} pagesArray={pagesArray} /> 
		{error ? <h2> {error}</h2> : "" }
	</div>
)
}

export default App;
