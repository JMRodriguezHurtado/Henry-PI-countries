import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({ currentPage, totalPages, handlePageClick }) => {
    const pageLimit = 2;
    const pageNumbers = [];
  
    let startPage = Math.max(currentPage - pageLimit, 1);
    let endPage = Math.min(currentPage + pageLimit, totalPages);
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    const handlePrevClick = () => {
      if (currentPage > 1) {
        handlePageClick(currentPage - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentPage < totalPages) {
        handlePageClick(currentPage + 1);
      }
    };
  
    return (
      <div className={styles.paginationWrapper}>
        <button className={styles.button} onClick={handlePrevClick} disabled={currentPage === 1}>
          Prev
        </button>
        {startPage > 1 && <button onClick={() => handlePageClick(1)}>1</button>}
        {startPage > 2 && <span>...</span>}
        {pageNumbers.map((number) => (
          <button className={styles.button}
            key={number}
            onClick={() => handlePageClick(number)}
            {...currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
        {endPage < totalPages - 1 && <span>...</span>}
        {endPage < totalPages && (
          <button className={styles.button} onClick={() => handlePageClick(totalPages)}>
            {totalPages}
          </button>
        )}
        <button className={styles.button} onClick={handleNextClick} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;