import React from 'react';

const PaginationBar = ({handlePageChange, currentPage}) => {
    return (
        <div>
        <button className="btn-primary" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        <button className="btn-primary" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>
    );
};

export default PaginationBar