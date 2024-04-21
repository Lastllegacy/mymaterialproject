import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/pages/Posts";
import PostIdPage from "./components/pages/PostIdPage";

function App() {
  return (
	<BrowserRouter>
		<Routes> 
			<Route 
				path="/"
				element={<Posts />}
				exact={true} 
			/>
			<Route 
				path="/posts"
				element={<Posts />}
				exact={true} 
			/>
			<Route 
				path="/posts/:id"
				element={<PostIdPage />}	
				exact={true} 
			/>
		</Routes>
	</BrowserRouter>
  )
}

export default App;
