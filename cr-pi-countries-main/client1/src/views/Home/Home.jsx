import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import NavBar from "../../components/navBarComponents/navBar";
import styles from "./Home.module.css";
import { getCountries,  
         getActivities,   
         filterByContinent,
         filterByActivity,
         sortByName,
         sortByPopulation,
         } from "../../redux/action";

export default function Home() {
  // State and Redux hooks
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.allActivities);
  const isActivitySelected = useSelector((state) => state.isActivitySelected);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(12);

  // Calculate pagination indexes
  const indexOfLastCountrie = currentPage * countriesPerPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;
  const currentCountries = allCountries.slice(indexOfFirstCountrie, indexOfLastCountrie);

  // Pagination function
  const paginado = (pageNumber) => {setCurrentPage(pageNumber)};

  // Fetch data on component mount
  useEffect(() => {dispatch(getCountries()); dispatch(getActivities())}, [dispatch]);

  // Event handlers
  const handleFilteredCountrie = (e) => {
    dispatch(filterByContinent(e.target.value));
  };

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(sortByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleSortPop = (e) => {
    e.preventDefault();
    dispatch(sortByPopulation(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleFilterByAct = (e) => {
    e.preventDefault();
    dispatch({ type: 'GET_ACTIVITIES', payload: e.target.value !== "none" });
    e.target.value === "none"
      ? dispatch(getCountries())
      : dispatch(filterByActivity(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className={styles.mainContainer}>
      <div>
        <NavBar setCurrentPage={setCurrentPage} />
      </div>
      <div className={styles.filtersRow}>
        {/* Filter controls */}
        <div>
          Orden Alfabético
          <select disabled={isActivitySelected} onChange={(e) => handleSort(e)}>
            <option></option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div>
          Número de Habitantes
          <select disabled={isActivitySelected} onChange={(e) => handleSortPop(e)}>
            <option></option>
            <option value="mayp">Menor a Mayor</option>
            <option value="menp">Mayor a Menor</option>
          </select>
        </div>
        <div>
          Busca por Continentes
          <select disabled={isActivitySelected} onChange={(e) => handleFilteredCountrie(e)}>
            <option value={"All"}> </option>
            <option value={"South America"}>Sudamérica</option>
            <option value={"North America"}>Norteamérica</option>
            <option value={"Africa"}>África</option>
            <option value={"Asia"}>Asia</option>
            <option value={"Europe"}>Europa</option>
            <option value={"Oceania"}>Oceanía</option>
            <option value={"Antarctica"}>Antárctica</option>
          </select>
        </div>
        <div>
          Busca por Actividad
          {activities.length === 0 ? (
            <p>No se han creado actividades</p>
          ) : (
            <select onChange={(e) => handleFilterByAct(e)}>
              <option value="none"></option>
              {activities.map((e) => (
                <option value={e.name} key={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Render cards */}
      <div className={styles.cardContainer}>
        {currentCountries.length ? (
          currentCountries.map((e) => (
            <div key={e.id}>
              <Card imgFlag={e.imgFlag} name={e.name} continent={e.continent} id={e.id} />
            </div>
          ))
        ) : (
          <h1>no hay paises</h1>
        )}
      </div>

      {/* Pagination */}
      <div>
        <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginado={paginado} />
      </div>
    </div>
  );
}