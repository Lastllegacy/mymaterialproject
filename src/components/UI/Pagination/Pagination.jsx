import React from "react";
import './Pagination.css'
import MyButton from "../Button/MyButton";

function Pagination({pagesArray, page, setPage }) {
  return (
    <div className="pagination">
      {pagesArray.map((p, index) => (
        <MyButton onClick={() => setPage(index + 1)}> <span className={page === index+1 ? "current-page" : ""}>
         {index + 1}
        </span> </MyButton>
      ))}
    </div>
  );
}

export default Pagination;
