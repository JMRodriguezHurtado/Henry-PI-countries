import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './card.module.css';

function Country(props) {
    const { id, name, image, continent } = props;

        return (
            <div className={style.countryCard}>
                <img className={style.background} src={image} alt="" />
                <div className={style.cardInfo}>
                    <div>
                        <div>
                            <NavLink to={`/detail/${id}`}>More</NavLink>
                        </div>
                    </div>
                    <div className={style.countryDetails}>
                        <h3>{name}</h3>
                        <p>{continent}</p>
                    </div>
                </div>
            </div>
        );
    }

export default Country;




