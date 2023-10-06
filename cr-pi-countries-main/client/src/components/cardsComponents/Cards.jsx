import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, setPage } from "../../redux/action";

import loadinggif from '../../assets/loadingGif.gif'
import style from './cards.module.css'
import Card from "../cardComponents/Card";

export default function Countries() {

    const dispatch = useDispatch()
    const countries = useSelector(state => state.renderedCountries)
    const loading = useSelector(state => state.loadingHome)

    const countriesPerPage = 10;
    const currentPage = useSelector(state => state.currentPage);
    const firstIndexCountry = (currentPage - 1) * countriesPerPage;
    const lastIndexCountry = firstIndexCountry + countriesPerPage;
    const renderedCountries = countries.slice(firstIndexCountry, lastIndexCountry);
    const lastPage = Math.ceil(countries.length / countriesPerPage);

    const canGoPrevious = currentPage > 1;
    const canGoNext = currentPage < lastPage;

    const handlerPagination = (direction, event) => {
        const newPage = currentPage + direction;
        dispatch(setPage(newPage));
    }

    useEffect(() => {
        dispatch(getAllCountries())
    }, [])

    return (
        <div >
            <h1>All Countries</h1>
            {
                loading 
                ? (
                    <img className={style.loadinggif} src={loadinggif} alt="" />
                )
                : (
                    <div className={style.countriesDiv}>
                        <div className={style.pagination}>
                            <button
                                onClick={(event) => canGoPrevious && handlerPagination(-1, event)}
                                className={style.paginationButton}
                                disabled={!canGoPrevious}
                            >
                                Prev
                            </button>
                            <div>
                                <p>{ currentPage - 3 > 0 && `${currentPage - 3}`}</p>
                                <p>{ currentPage - 2 > 0 && `${currentPage - 2}`}</p>
                                <p>{ currentPage - 1 > 0 && `${currentPage - 1}`}</p>
                                <p className={style.currentPage}>{currentPage}</p>
                                <p>{currentPage + 1 <= lastPage && `${currentPage + 1}`}</p>
                                <p>{currentPage + 2 <= lastPage && `${currentPage + 2}`}</p>
                                <p>{currentPage + 3 <= lastPage && `${currentPage + 3}`}</p>
                            </div>
                            <button
                                onClick={(event) => canGoNext && handlerPagination(1, event)}
                                className={style.paginationButton}
                                disabled={!canGoNext}
                            >
                                Next
                            </button>
                        </div>
                        <div className={style.divCountries}>
                            {
                                renderedCountries.map(country => (
                                    <Card
                                        id={country.id}
                                        key={country.id}
                                        name={country.name}
                                        image={country.image}
                                        continent={country.continent}
                                    />
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}