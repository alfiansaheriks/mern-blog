import React from 'react';

const Pagination = ({ currentPage, totalPages, perPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => perPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 border rounded-lg bg-gray-200"
      >
        Previous
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => perPage(page)}
          className={`px-4 py-2 mx-1 border rounded-lg ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => perPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 border rounded-lg bg-gray-200"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
