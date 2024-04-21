import axios from "axios";

export class PostService {
   static async fetchPosts (limit,page) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_limit: limit,
					_page: page,
				}
			})
         return response
   }

   static async getPostById (id) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         return response
   }
}