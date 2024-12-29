import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const pageNumbers = Array.from(
    { length: 5 },
    (_, index) => (currentPage === 1 ? currentPage : currentPage - 1) + index
  );
  return (
    <div className="d-flex justify-content-end mt-2 me-4">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <span
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </span>
          </li>
          {pageNumbers.map((page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {currentPage === page ? (
                <span className="page-link">{page}</span>
              ) : (
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                >
                  {page}
                </a>
              )}
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
