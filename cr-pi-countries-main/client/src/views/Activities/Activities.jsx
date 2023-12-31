import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteActivity, getActivities } from "../../redux/action"
import NavBar from "../../components/navBarComponents/navBar"
import bin from '../../assets/bin.png'
import style from './activityInt.module.css'


export default function Activity() {

    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loadingActivities)

    console.log(activities)

    useEffect( () => {
        dispatch(getActivities())

    },[dispatch])

    const handleDelete = (id) => {

        dispatch(deleteActivity(id))

    }

    return (
        <div className={style.activitiesPage}>
            <div className={style.nav}>
                <NavBar/> 
            </div>
            {
                loading
                ? (
                    <></>
                )
                : (
                    <div className={style.activitiesDiv}>
                        {
                            activities?.map(activity => (
                                <div className={style.activityDiv} key={activity.id}>
                                    <h1>{activity.name}</h1>
                                    <div className={style.activityInfo}>
                                        <p>Difficulty: <b>{activity.difficulty}</b></p>
                                        <p>Duration: <b>{activity.duration}hs</b></p>
                                        <p>Recommended season: <b>{activity.season}</b></p>
                                        <p>Rating: <b>{activity.rating}</b></p>
                                        <div className={style.activityCountries}>
                                            <p>Countries:</p>
                                            <p className={style.countries}>
                                                {
                                                    activity.Countries.map(country => (
                                                        activity.Countries[activity.Countries.length-1] !== country
                                                        ? <b key={`${activity.id}-${country}`}> {country},</b>
                                                        : <b key={`${activity.id}-${country}`}> {country}</b>
                                                    ))
                                                }
                                            </p>
                                        </div>
                                        <p>Picture:</p>
                                        <img src={activity.image} alt ={`${activity.name}`} className={style.activityImage}/>
                                    </div>
                                    <img onClick={() => handleDelete(activity.id)} className={style.deleteBin} src={bin} alt="" />
                                </div>
                            ))
                        }
                    </div>                    
                )
            }

        </div>
    )
} 