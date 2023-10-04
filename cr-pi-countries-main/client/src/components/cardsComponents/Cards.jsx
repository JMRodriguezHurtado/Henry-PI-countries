import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearSearch } from "../../redux/action";
import Card from "../cardComponents/Card";
import styles from "./cards.module.css"
import Pagination from "../../components/paginationComponents/pagination";

export default function Cards () {
  const dispatch = useDispatch();
  const countries = useSelector((state) => {
    return state.searchResults.length > 0
      ? state.searchResults
      : state.countries;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  useEffect(() => {
    setCurrentPage(1);
    dispatch(clearSearch());
  }, [dispatch]);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const pageNumbers = Math.ceil(countries.length / countriesPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (currentCountries.length === 0) {
    return (
      <div className={styles.cardsStyle}>
        <p>Network error, please contact support</p>
      </div>
    );
  }

  return (
    <div className={styles.cardsStyle}>
      {currentCountries.map((country) => (
        <Card
          key={country.id}
          id={country.id}
          name={country.name}
          flags={country.flags}
          continent={country.continent}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={pageNumbers}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

