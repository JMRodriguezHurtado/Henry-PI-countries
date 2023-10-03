import { Link } from "react-router-dom";
import { BGContainer, GeneralContainer,
         FormContainer, ErrorSpan,
         CountriesContainer, Selected,
         SuccessSpan } from "./formStyles"; 
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
      <BGContainer>
        <GeneralContainer>
          <FormContainer onSubmit={handleSubmit}>Este es el contenedor del formato
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
            {errorMessage.name && <span>{errorMessage.name}</span>}
            <label htmlFor="difficulty">Difficulty</label>
            <select
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
  
            <label htmlFor="duration">Duration (hr)</label>
            <select
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
  
            <label htmlFor="temporada">Temporada</label>
            <select name="temporada" value={input.temporada} onChange={handleChange}>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
  
            <CountriesContainer>
              <label htmlFor="countries">Countries</label>
              <input type="text" onChange={handleSearch} value={searchTerm} />
              <ul>
                {filteredCountries.map((country) => (
                  <li key={country.id}>
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
                    <Selected
                      type="button"
                      onClick={() => handleCountryRemove(index)}
                    >con esto se seleccionan cosas
                      x
                    </Selected>
                  </span>
                ))}
              </div>
              {errorMessage.countries && (
                <ErrorSpan>{errorMessage.countries}</ErrorSpan>
              )}
            </CountriesContainer>
            {!errorMessage.name &&
              !errorMessage.countries &&
              !errorMessage.other &&
              !success && <button type="submit">Create</button>}
            {errorMessage.other && !success && (
              <span>{errorMessage.other}</span>
            )}
            {errorMessage.other && (
              <button
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload
              </button>
            )}
            {success && (
              <SuccessSpan> La Actividad se creo con exito! </SuccessSpan>
            )}
            {success && (
              <button onClick={() => window.location.reload()}>OK</button>
            )}
          </FormContainer>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </GeneralContainer>
      </BGContainer>
    );
  };
  
  export default FormInt;