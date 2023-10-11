import React from 'react';
import FormHandlers from './FormHandlers';
import {useState} from 'react';
import style from "./form.module.css";
import "./form.css"


export default function FormInputs () { 
    
    const { errors, submitHandler } = FormHandlers();

    const [form, setForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        rating: '',
        image: '',
        Countries: []
      });

    const handleChange = (event) => {

        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const handleDifficulty = (event) => {

        setForm({
            ...form,
            difficulty: event.target.innerText
        })

    }
    const handleRating = (event) => {

        setForm({
            ...form,
            rating: event.target.innerText
        })

    }

    const handleSeason = (event) => {
        setForm({
            ...form,
            season: event.target.innerText
        })
    }


    const handleCountry = (event) => {
        console.log(form.Countries)

        if(form.Countries.includes(event.target.innerText)){
            return alert('That country has already been choosen')
        }

        if(form.Countries.length > 4){
            alert('Only 5 countries are available at the same time')
        } else {
            setForm({
                ...form,
                Countries: [...form.Countries, event.target.innerText]
            })
        }
    }
    return (
        <div>
            <div className='selectBox'>
                    <div className={style.label}>
                        <label>Name:</label>
                        {errors?.name && <p className={style.error}>{errors.name}</p>}
                    </div>
                    <input type="text" name="name" id="name" value={form.name} onChange={handleChange}/>
                </div>
            <div className='selectBox'>
                    <div className={style.label}>
                        <label>Duration(hs):</label>
                        {errors?.duration && <p className={style.error}>{errors.duration}</p>}
                    </div>
                    <input  type="text" name="duration" id="duration" value={form.duration} onChange={handleChange}/>                    
                </div>
                <div className='selectBox'>
                    <div className={style.label}>
                        <label>Image:</label>
                        {errors?.image && <p className={style.error}>{errors.image}</p>}
                    </div>
                    <input type="text" name="image" id="image" value={form.image} onChange={handleChange}/>
                </div>
                <button type='submit' className={style.button}>CREATE</button>
        </div>
    )
}
