import { useEffect, useMemo, useState } from "react";
import "../../styles/Posts.css";
import axios from "axios";
import PostList from "../UI/PostList/PostList";
import MyButton from "../UI/Button/MyButton";
import MyModal from "../UI/Modal/MyModal";
import { useSortAndSearchPosts } from "../MyHooks/usePosts";
import PostFilter from "../UI/PostFilter/PostFilter";
import Pagination from "../UI/Pagination/Pagination";
import Loader from "../UI/Loader/Loader";
import { PostService } from "../Service/PostService";

function Posts() {

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

   const pagesArray = useMemo(() => {
		return getPagesArray(totalCount)
	}, [totalCount])

	const fetchPosts = async (limit, page) => {
		try {
			setPostsLoading(true)
			const response = await PostService.fetchPosts(limit,page)
			setPosts(response.data);
			setTotalCount(response.headers['x-total-count']);

		} catch(e) {
			setError(e.message)
		} finally {
			setPostsLoading(false)
		}
		
	}

	const addPost = (newPost) => {
		setPosts([newPost, ...posts])
		setIsModal(!isModal)
	}

	const deletePost = (id) => {
		setPosts(posts.filter(post => post.id !== id))
	}

	useEffect(() => {
		fetchPosts(limit, page)
	}, [limit, page]);

  return (
	<div className="App">
		<MyModal isOpen={isModal} closeModal={() => setIsModal(!isModal)} addPost={addPost} />
		<MyButton 
			onClick={() => setIsModal(true)} 
			className="modal-open"
		> Добавить пост 
		</MyButton>
		<hr style={{marginTop:15}} />
		<PostFilter filter={filter} setFilter={setFilter} />
		{postsLoading ? <Loader /> : (<PostList deletePost={deletePost} posts={sortAndSearchPosts} />)}
		<Pagination page={page} setPage={setPage} pagesArray={pagesArray} /> 
		{error ? <h2> {error} </h2> : "" }
	</div>
)
}

export default Posts;