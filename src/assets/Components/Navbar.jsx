import React from "react";
import Image from "./img/Navbar.svg";

// Navbar component receives setCountry and setCategory functions as props
function Navbar({ setCountry, setCategory }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-dark navbar-dark">
        <div className="container-fluid">
          {/* SilverInsight Logo */}
          <img src={Image} alt="SilverInsight Logo" />

          {/* Brand Name */}
          <a className="navbar-brand" href="/">
            SilverInsight
          </a>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* Home Link */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              {/* GitHub Link */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://www.github.com/PankajKDev"
                >
                  Github
                </a>
              </li>

              {/* Country Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </a>
                <ul className="dropdown-menu">
                  {/* Individual Country Options */}
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCountry(`in`);
                      }}
                    >
                      India
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCountry(`us`);
                      }}
                    >
                      United States
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCountry(`cn`);
                      }}
                    >
                      China
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCountry(`jp`);
                      }}
                    >
                      Japan
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setCountry(`kr`);
                      }}
                    >
                      Korea
                    </a>
                  </li>
                  {/* ... (Try to add other countries too in same manner to practice) */}
                </ul>
              </li>

              {/* Category Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul  className="dropdown-menu">
                  {/* Individual Category Options */}
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setCategory(`general`)}
                    >
                      General
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setCategory(`technology`)}
                    >
                      Technology
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setCategory(`health`)}
                    >
                      Health
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setCategory(`science`)}
                    >
                      Science
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => setCategory(`entertainment`)}
                    >
                      Entertainment
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
