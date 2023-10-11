import { useSelector } from "react-redux";
import style from "./form.css"
import "./form.css"
import { useState } from 'react'
import  FormInputs  from './FormInputs';


export default function FormSelectors() { 

const {form} = FormInputs;
const countries = useSelector(state => state.allCountries);    
const [rating, setRating] = useState(false)
const [difficulty, setDifficulty] = useState(false)
const [season, setSeason] = useState(false)
const [country, setCountry] = useState(false)

const handleSelectDifficulty = (event) => {
    const difficultyOptions = document.querySelector("#difficultyOptions")

    if(!difficulty) {
        setDifficulty(true)
        difficultyOptions.classList.remove('hiddenOptions');            
        difficultyOptions.classList.add('showDifficulty');           

    } else{
        setDifficulty(false)

        setTimeout(() => {
            difficultyOptions.classList.remove('hideDifficulty');
            difficultyOptions.classList.add('hiddenOptions')
            
        }, 500);
        
        difficultyOptions.classList.remove('showDifficulty')
        difficultyOptions.classList.add('hideDifficulty')
    }
    event.currentTarget.classList.toggle('difficultyActive')
    
}

const handleSelectRating = (event) => {
    const ratingOptions = document.querySelector("#ratingOptions")

    if(!rating) {
        setRating(true)
        ratingOptions.classList.remove('hiddenOptions');            
        ratingOptions.classList.add('showRating');           

    } else{
        setRating(false)

        setTimeout(() => {
            ratingOptions.classList.remove('hideRating');
            ratingOptions.classList.add('hiddenOptions')
            
        }, 500);
        
        ratingOptions.classList.remove('showRating')
        ratingOptions.classList.add('hideRating')
    }
    event.currentTarget.classList.toggle('ratingActive')
    
}

const handleSelectSeason = (event) => {
    const seasonOptions = document.querySelector("#seasonOptions")

    if(!season) {
        setSeason(true)
        seasonOptions.classList.remove('hiddenOptions');            
        seasonOptions.classList.add('showSeason');            

    } else{
        setSeason(false)

        setTimeout(() => {
            seasonOptions.classList.remove('hideSeason');
            seasonOptions.classList.add('hiddenOptions')
            
        }, 500);

        seasonOptions.classList.remove('showSeason')
        seasonOptions.classList.add('hideSeason')
    }
    event.currentTarget.classList.toggle('seasonActive')
}

const handleSelectCountry = (event) => {
    const countryOptions = document.querySelector("#countryOptions")

    if(!country) {
        setCountry(true)
        countryOptions.classList.remove('hiddenOptions');            
        countryOptions.classList.add('showCountry');            

    } else{
        setCountry(false)

        setTimeout(() => {
            countryOptions.classList.remove('hideCountry');
            countryOptions.classList.add('hiddenOptions')
            
        }, 500);

        countryOptions.classList.remove('showCountry')
        countryOptions.classList.add('hideCountry')
    }
    event.currentTarget.classList.toggle('countryActive')
}

const handleClickOutside = () => {

    const difficultyActive = document.querySelector('.difficulty')

    if(difficulty){
        setDifficulty(false)

        setTimeout(() => {
            difficultyOptions.classList.remove('hideDifficulty');
            difficultyOptions.classList.add('hiddenOptions')
            
        }, 500);
        
        difficultyOptions.classList.remove('showDifficulty')
        difficultyOptions.classList.add('hideDifficulty')
        difficultyActive.classList.value.includes('difficultyActive') && difficultyActive.classList.toggle('difficultyActive')
        
    }

    const ratingActive = document.querySelector('.rating')

    if(rating){
        setRating(false)

        setTimeout(() => {
            ratingOptions.classList.remove('hideRating');
            ratingOptions.classList.add('hiddenOptions')
            
        }, 500);
        
        ratingOptions.classList.remove('showRating')
        ratingOptions.classList.add('hideRating')
        ratingActive.classList.value.includes('ratingActive') && ratingActive.classList.toggle('ratingActive')
        
    }

    const seasonActive = document.querySelector('.season')

    if(season === true){
        setSeason(false)

        setTimeout(() => {
            seasonOptions.classList.remove('hideSeason');
            seasonOptions.classList.add('hiddenOptions')
            
        }, 500);

        seasonOptions.classList.remove('showSeason')
        seasonOptions.classList.add('hideSeason')
        seasonActive.classList.value.includes('seasonActive') && seasonActive.classList.toggle('seasonActive')

    }

    const countryActive = document.querySelector('.country')

    if(country === true){
        setCountry(false)

        setTimeout(() => {
            countryOptions.classList.remove('hideCountry');
            countryOptions.classList.add('hiddenOptions')
            
        }, 500);

        countryOptions.classList.remove('showCountry')
        countryOptions.classList.add('hideCountry')
        countryActive.classList.value.includes('countryActive') && countryActive.classList.toggle('countryActive')
    }

}
return (
    <div>
    <div className='selectBox'>
    <div onClick={handleSelectDifficulty} className='difficulty'>
        <div>
            <p className='title'>Difficulty</p>
        </div>
    </div>
    <div id='difficulty' name='difficulty' value={form.difficulty} onChange={handleChange} className={style.options}>{form.difficulty}</div>
    <div className='hiddenOptions' id="difficultyOptions">
        <div className="option">
            <p onClick={handleDifficulty}>1</p>
        </div>
        <div className="option">
            <p onClick={handleDifficulty}>2</p>
        </div>
        <div className="option">
            <p onClick={handleDifficulty}>3</p>
        </div>
        <div className="option">
            <p onClick={handleDifficulty}>4</p>
        </div>
        <div className="option">
            <p onClick={handleDifficulty}>5</p>
        </div>
    </div>
</div>
<div className='selectBox'>
    <div onClick={handleSelectRating} className='rating'>
        <div>
            <p className='title'>Rating</p>
        </div>
    </div>
    <div id='rating' name='rating' value={form.rating} onChange={handleChange} className={style.options}>{form.rating}</div>
    <div className='hiddenOptions' id="ratingOptions">
        <div className="option">
            <p onClick={handleRating}>1</p>
        </div>
        <div className="option">
            <p onClick={handleRating}>2</p>
        </div>
        <div className="option">
            <p onClick={handleRating}>3</p>
        </div>
        <div className="option">
            <p onClick={handleRating}>4</p>
        </div>
        <div className="option">
            <p onClick={handleRating}>5</p>
        </div>
    </div>
</div>
<div className='selectBox'>
    <div onClick={handleSelectSeason} className='season'>
        <div>
            <p className='title'>Season</p>
        </div>
    </div>
    <div id='season' name='season' value={form.season} onChange={handleChange} className={style.options}>{form.season}</div>
    <div className='hiddenOptions' id="seasonOptions">
        <div className="option">
            <p onClick={handleSeason}>Summer</p>
        </div>
        <div className="option">
            <p onClick={handleSeason}>Autumn</p>
        </div>
        <div className="option">
            <p onClick={handleSeason}>Winter</p>
        </div>
        <div className="option">
            <p onClick={handleSeason}>Spring</p>
        </div>
    </div>
</div>
<div className='selectBox'>
    <div onClick={handleSelectCountry} className='country'>
        <div>
            <p className='title'>Countries</p>
        </div>
    </div>
    <div className='hiddenOptions' id="countryOptions">
        {countries.map(country => {
            return(
                <div key={country.name} className='option'>
                    <p onClick={handleCountry}>{country.name}</p>
                </div>
            )
        })}
    </div>
    <div id='Countries' name='Countries' value={form.Countries} onChange={handleChange} className={style.countries}>
        {form.Countries.map(country => {
            return (
                <React.Fragment key={country}>
                    {<div className={style.selectedCountries}><h5 className={style.h5}>{country}</h5><p onClick={()=>{handleDeleteCountry(country)}}>X</p><br/></div>}
                </React.Fragment>
            )
        })}
    </div>
    </div>
    </div>
)
}