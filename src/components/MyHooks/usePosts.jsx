import { useMemo } from "react";

export const useSortedPosts = (posts, sortOption) => {
		
   const sortedPosts = useMemo(() => {
      if(sortOption) {
         return [...posts].sort((a,b) => a[sortOption].localeCompare(b[sortOption]))
      }
      return [...posts];
   }, [sortOption, posts]) 
   return sortedPosts;
};

export const useSortAndSearchPosts = (posts, sortOption, query) => {

   const sortedPosts = useSortedPosts(posts,sortOption);

	const sortAndSearchPosts = useMemo(() => {
      return sortedPosts.filter(post => {
         let title = post.title.toLowerCase();
         let body = post.body.toLowerCase();
         let queryString = query.toLowerCase();

         return (title.includes(queryString) || body.includes(queryString))
      })
   }, [query, sortedPosts])
   return sortAndSearchPosts;
}