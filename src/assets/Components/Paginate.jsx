import React from 'react';

// Paginate component receives currentPage, paginate function, indexOfLastItem, and data as props
function Paginate({ currentPage, paginate, indexOfLastItem, data }) {
  return (
    <>
      {/* Pagination Buttons */}
      <div id='bit' className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "10rem" }}>
        {/* Previous Button */}
        <button
          type="button"
          // Disable the button if on the first page
          disabled={currentPage === 1}
          // Call paginate function with the previous page number
          onClick={() => paginate(currentPage - 1)}
          className="btn btn-outline-light"
        >
          Previous
        </button>

        {/* Next Button */}
        <button
          type="button"
          // Disable the button if reaching the end of the data
          disabled={indexOfLastItem >= data.length}
          // Call paginate function with the next page number
          onClick={() => paginate(currentPage + 1)}
          className="btn btn-outline-light"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Paginate;
