import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import News from "./assets/Components/News";
import Paginate from "./assets/Components/Paginate";

// Replace this with your actual NewsAPI key
const apiKey = '';

function App() {
  // Constants and state variables for managing data, loading, error, search, pagination, country, and category
  const itemsPerPage = 12;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [Country, setCountry] = useState("in");
  const [Category, setCategory] = useState("general");

  // Function to fetch news articles from NewsAPI based on user-selected parameters
  async function fetchLocal() {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${Country}&q=${search}&category=${Category}&pageSize=40&apiKey=${apiKey}`
      );
      const result = await response.json();

      // Update state with fetched data
      setData(result.articles);
    } catch (error) {
      console.error(error);

      // Handle errors by updating error state
      setError(true);
    } finally {
      // Set loading state to false after fetching or encountering an error
      setLoading(false);
    }
  }

  // UseEffect hook to trigger data fetching when Country or Category state changes
  useEffect(() => {
    fetchLocal();
  }, [Country, Category]);

  // Calculate pagination variables based on the current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Function to handle page changes and update the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Component rendering
  return (
    <>
      {/* Navbar component for user interaction */}
      <Navbar
        search={search}
        setCountry={setCountry}
        setCategory={setCategory}
      />

      {/* News component to display fetched news articles */}
      <News
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        fetchLocal={fetchLocal}
        setSearch={setSearch}
        search={search}
        loading={loading}
        error={error}
        data={data}
        setCategory={setCategory}
      />

      {/* Pagination component for navigating through pages */}
      <Paginate
        currentPage={currentPage}
        paginate={paginate}
        indexOfLastItem={indexOfLastItem}
        data={data}
      />
    </>
  );
}

export default App;
