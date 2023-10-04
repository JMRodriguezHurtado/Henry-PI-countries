import { Link } from "react-router-dom";
import styles from "./form.module.css"

const FormInt = (props) => {
    const {
      handleSubmit,
      handleChange,
      errorMessage,
      input,
      searchTerm,
      handleSearch,
      filteredCountries,
      handleCountrySelect,
      handleCountryRemove,
      success,
    } = props;
    return (
      <div className={styles.bgContainer}>
        <div className={styles.generalContainer}>
          <div className={styles.formContainer} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
            {errorMessage.name && <span>{errorMessage.name}</span>}
            <label className={styles.label} htmlFor="difficulty">Difficulty</label>
            <select className={styles.select}
              name="difficulty"
              value={input.difficulty}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
  
            <label className={styles.label} htmlFor="duration">Duration (hr)</label>
            <select className={styles.select}
              name="duration"
              value={input.duration}
              onChange={handleChange}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
  
            <label className= {styles.label} htmlFor="temporada">Temporada</label>
            <select className={styles.select} name="temporada" value={input.temporada} onChange={handleChange}>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
  
            <div className={styles.countriesContainer}>
              <label htmlFor="countries">Countries</label>
              <input type="text" onChange={handleSearch} value={searchTerm} />
              <ul className={styles.ul}>
                {filteredCountries.map((country) => (
                  <li className={styles.li} key={country.id}>
                    {country.name}{" "}
                    <button
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                    >
                      +
                    </button>
                  </li>
                ))}
              </ul>
              <div>
                {input.countries.map((country, index) => (
                  <span key={index}>
                    {country}{" "}
                    <button className={styles.button}
                      type="button"
                      onClick={() => handleCountryRemove(index)}
                    >
                      x
                    </button>
                  </span>
                ))}
              </div>
              {errorMessage.countries && (
                <span>{errorMessage.countries}</span>
              )}
            </div>
            {!errorMessage.name &&
              !errorMessage.countries &&
              !errorMessage.other &&
              !success && <button type="submit">Create</button>}
            {errorMessage.other && !success && (
              <span>{errorMessage.other}</span>
            )}
            {errorMessage.other && (
              <button className={styles.button}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload
              </button>
            )}
            {success && (
              <span> La Actividad se creo con exito! </span>
            )}
            {success && (
              <button className={styles.button} onClick={() => window.location.reload()}>OK</button>
            )}
          </div>
          <Link to="/home">
            <button className={styles.button}>Home</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default FormInt;