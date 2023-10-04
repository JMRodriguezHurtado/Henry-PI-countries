import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./navBar.module.css";
import {
    clearSearch,
    searchCountries,
    filterByContinent,
    filterByActivity,
    sortByName,
    sortByPopulation,
  } from "../../redux/action";
import Wmap from "../../utils/imagenes/Wmap.jpg";


  export default function NavBar() {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);
  
    const handleSearch = (event) => {
      const name = event.target.value;
      if (name) {
        dispatch(searchCountries(name));
      } else {
        dispatch(clearSearch());
      }
    };
  
    const handleContinentFilter = (event) => {
      const continent = event.target.value;
      dispatch(filterByContinent(continent));
    };
  
    const handleActivityFilter = (event) => {
      const activity = event.target.value;
      dispatch(filterByActivity(activity));
    };
  
    const handleNameSort = (event) => {
      const order = event.target.value;
      dispatch(sortByName(order));
    };
  
    const handlePopulationSort = (event) => {
      const order = event.target.value;
      dispatch(sortByPopulation(order));
    };
  
    return (
      <div className={styles.navBarContainer}>
        <div className={styles.navLinks}>
          <Link to="/form">
            <h3 className={styles.h3}>New Activity</h3>
          </Link>
          <Link to="/activities">
            <h3 className={styles.h3}>Activities</h3>
          </Link>
        </div>
        <img className={styles.img} src={`${Wmap}`} alt="" />
        <div className={styles.searchBarContainer}>
          <input className={styles.input}
            type="text"
            placeholder="Busca el Pais"
            onChange={handleSearch}
          />
        </div>
        <img className={styles.img} src={`${Wmap}`} alt="" />
        <div className={styles.filterContainer}>
          <select className={styles.select} onChange={handleContinentFilter}>
            <option className={styles.option} value="">Filtro por Continente</option>
            <option className={styles.option} value="Antarctic">Antarctic</option>
            <option className={styles.option} value="Africa">Africa</option>
            <option className={styles.option} value="Americas">Americas</option>
            <option className={styles.option} value="Asia">Asia</option>
            <option className={styles.option} value="Europe">Europe</option>
            <option className={styles.option} value="Oceania">Oceania</option>
          </select>
          <select className={styles.select} onChange={handleActivityFilter}>
            <option className={styles.option} value="">Filtro por Actividad</option>
            {activities.map((a) => (
              <option className={styles.option} key={a.id} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
          <select className= {styles.select} onChange={handleNameSort}>
            <option className={styles.option} value="">Ordenar por nombre</option>
            <option className={styles.option} value="asc">A-Z</option>
            <option className={styles.option} value="desc">Z-A</option>
          </select>
          <select className={styles.select} onChange={handlePopulationSort}>
            <option className={styles.option} value="">Sort by Population</option>
            <option className={styles.option} value="asc">Ascending</option>
            <option className={styles.option} value="desc">Descending</option>
          </select>
        </div>
      </div>
    );
  }