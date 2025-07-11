import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState(
    () => localStorage.getItem("search") || ""
  );
  const [priceFilter, setPriceFilter] = useState(
    () => localStorage.getItem("priceFilter") || ""
  );
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9;

  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFiltered(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("search", search);
    localStorage.setItem("priceFilter", priceFilter);
  }, [search, priceFilter]);

  useEffect(() => {
    let result = data;

    if (search.trim() !== "") {
      const query = search.trim().toLowerCase();

      result = result.filter(
        (book) =>
          (book.name || "").toLowerCase().includes(query) ||
          (book.author || "").toLowerCase().includes(query) ||
          (Array.isArray(book.genre)
            ? book.genre.map((g) => g.toLowerCase()).join(" ")
            : (book.genre || "").toLowerCase()
          ).includes(query)
      );
    }

    if (priceFilter) {
      switch (priceFilter) {
        case "5-10":
          result = result.filter((book) => book.price >= 5 && book.price <= 10);
          break;
        case "11-15":
          result = result.filter(
            (book) => book.price >= 11 && book.price <= 15
          );
          break;
        case "16-20":
          result = result.filter(
            (book) => book.price >= 16 && book.price <= 20
          );
          break;
        case "20+":
          result = result.filter((book) => book.price > 20);
          break;
        default:
          break;
      }
    }

    setFiltered(result);
    setCurrentPage(1);
  }, [search, priceFilter, data]);

  const indexOfLast = currentPage * booksPerPage;
  const indexOfFirst = indexOfLast - booksPerPage;
  const currentBooks = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">SmartShelf</h2>
      {console.log(data[0])}

      <div className="row mb-4 align-items-center">
        <div className="col-md-8 mb-2 mb-md-0">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name, author, or genre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="">Filter by Price</option>
            <option value="5-10">5–10 USD</option>
            <option value="11-15">11–15 USD</option>
            <option value="16-20">16–20 USD</option>
            <option value="20+">20+ USD</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => (
            <div className="col-md-4" key={book.id}>
              <div className="card h-100 shadow-lg border-0 rounded-4">
                <div className="card-body text-center p-4">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      book.name
                    )}&background=random`}
                    alt={book.name}
                    className="mb-3 shadow rounded-2"
                    width="80"
                    height="80"
                  />
                  <h2 className="card-title mb-1">{book.name}</h2>
                  <h5 className="text-muted mb-2">{book.author}</h5>
                  <h6 className="mb-2">USD {book.price}</h6>
                  <p className="card-text text-secondary">{book.description}</p>
                  <button className="btn btn-primary mt-2 px-4 rounded-pill">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No books found.</p>
        )}
      </div>
      {totalPages > 1 && (
        <nav className="mt-5 d-flex justify-content-center">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i + 1}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default App;
