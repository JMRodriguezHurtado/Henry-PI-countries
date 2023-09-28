import React from "react";

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
      <div>Contenedor de la paginacion
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          Prev
        </button>
        {startPage > 1 && <button onClick={() => handlePageClick(1)}>1</button>}
        {startPage > 2 && <span>...</span>}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageClick(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
        {endPage < totalPages - 1 && <span>...</span>}
        {endPage < totalPages && (
          <button onClick={() => handlePageClick(totalPages)}>
            {totalPages}
          </button>
        )}
        <button onClick={handleNextClick} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;