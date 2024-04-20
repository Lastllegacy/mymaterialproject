import React from "react";
import MySelect from "../Select/MySelect";
import MyInput from "../Input/MyInput";

function PostFilter({filter, setFilter}) {

   const sortOptions = [
		{name: "По названию" , value: "title"},
		{name: "По описанию" , value: "body"}
	];


  return (
   <div>
      <MySelect
         value={filter.sortOption} 
         onChange={e => setFilter({...filter, sortOption: e.target.value})} 
         sortOptions={sortOptions} 
	   />
	   <MyInput
         placeholder="Поиск..." 
         value={filter.query} 
         onChange={e => setFilter({...filter, query: e.target.value})} 
         style={{marginTop:10,width:"300px"}}
		/> 
   </div>
  )
}

export default PostFilter;
