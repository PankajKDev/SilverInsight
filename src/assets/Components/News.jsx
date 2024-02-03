import AltImage from "./img/Alt.jpeg";

// News component receives various props for managing state and data
function News({
  loading,
  error,
  data,
  search,
  setSearch,
  fetchLocal,
  setCurrentPage,
  indexOfFirstItem,
  indexOfLastItem,
  country,
}) {
  // Slice the data to display the current items based on pagination
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Render the News component
  return (
    <>
      <div>
        <div
          className="bg-dark"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100dvw",
            alignItems: "center",
            marginTop: "-46px",
          }}
        >
          <div
            className="container row"
            style={{ marginTop: "3.7rem", justifyContent: "center" }}
          >
            {/* Search Bar Section */}
            <div className="container" id="search">
              <form
                id="sbar"
                className="d-flex mt-3"
                role="search"
                onSubmit={(event) => {
                  event.preventDefault();
                  fetchLocal();
                }}
              >
                {/* Input for search query */}
                <input
                  onChange={(event) => setSearch(event.target.value)}
                  value={search}
                  className="form-control me-2 rounded-pill"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                {/* Button to trigger search */}
                <button
                  className="btn btn-outline-light rounded-pill"
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault();
                    fetchLocal();
                  }}
                >
                  Search&nbsp;?
                </button>
              </form>
            </div>

            {/* Loading Spinner Section */}
            {loading && (
              <div
                style={{ position: "absolute", top: "40dvh", left: "45dvw" }}
                className="spinner-border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            )}

            {/* Error Message Section */}
            {error && <div>Error...</div>}

            {/* News Cards Section */}
            {!loading && !error && data && data.length > 0 ? (
              currentItems
                .filter((stuff) => stuff.title)
                .map((stuff, index) => (
                  <div
                    className="col-md-2 mb-2 my-2 mx-1"
                    style={{ width: "35ch" }}
                    key={index}
                  >
                    {/* Individual News Card */}
                    <div className="card text-bg-dark border-success">
                      {/* News Image */}
                      <img
                        id="foto"
                        src={stuff.urlToImage || AltImage}
                        className="card-img-top"
                        style={{ width: "100%", height: "188px" }}
                        alt=""
                      />
                      <div className="card-body">
                        {/* News Title */}
                        <h5 className="card-title">
                          {stuff.description ? (
                            `${stuff.description.substring(0, 60)}...`
                          ) : (
                            <span>Failed to load article data</span>
                          )}
                        </h5>
                        {/* News Content */}
                        <p className="card-text">
                          {stuff.content ? (
                            `${stuff.content.substring(0, 150)}...`
                          ) : (
                            <span>Failed to load article data</span>
                          )}
                        </p>
                        {/* Read More Button */}
                        <a
                          target="_blank"
                          href={stuff.url}
                          className="btn btn-dark border-success"
                        >
                          Read more...
                        </a>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              // No Results Found Section
              <div id="warn" style={{ color: "white", textAlign: "center" }}>
                <div id="waner">No results found.</div>
              </div>
            )}
          </div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          ></div>
        </div>
      </div>
    </>
  );
}

export default News;
