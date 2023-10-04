import { Link } from "react-router-dom";
import styles from "./detail.module.css";

const DetailInt = (props) => {
    const { isLoading, countryBdd, selectedActivity, setSelectedActivity } =
      props;
    return (
      <div className={styles.container}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.map} />
            <div className={styles.loadingText}>Loading...</div>
          </div>
        ) : (
          <div>
            {countryBdd.map((country) => (
              <div className={styles.divContainer} key={country.id}>
                <h1>ID: {country.id}</h1>
                <h1>Name: {country.name}</h1>
                <img src={country.flags} alt={country.name} />
                <h2>Continent: {country.continent}</h2>
                <h2>Capital: {country.capital}</h2>
                <h2>Subregion: {country.subregion}</h2>
                <h2>Area: {country.area}</h2>
                <h2>Population: {country.population} inhabitants</h2>
                <h2>
                  Activities:{" "}
                  {country.activities.length > 0 ? (
                    country.activities.map((activity) => (
                      <ul key={activity.id}>
                        <li
                          onMouseOver={() => setSelectedActivity(activity)}
                          onMouseOut={() => setSelectedActivity(null)}
                        >{`${activity.nombre}`}</li>
                      </ul>
                    ))
                  ) : (
                    <span>No available activities</span>
                  )}
                  {selectedActivity && (
                    <div className={styles.floatingBox}>
                      <p>Difficulty: {selectedActivity.dificultad}</p>
                      <p>Duration: {selectedActivity.duracion}</p>
                      <p>Season: {selectedActivity.temporada}</p>
                    </div>
                  )}
                </h2>
              </div>
            ))}
            <div className={styles.buttonContainer}>
              <Link to="/home">
                <button className={styles.homeButton}>Home</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default DetailInt;