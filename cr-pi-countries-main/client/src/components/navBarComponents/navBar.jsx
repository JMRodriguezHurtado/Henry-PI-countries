
import {NavLink} from 'react-router-dom';
import homeIcon from '../../assets/homeIcon.png'
import create from '../../assets/create.png'
import activities from '../../assets/activities.png'
import style from './navBar.module.css'


export default function navBar() {

    return (
        <div className={style.nav}>
            <NavLink to={`/home`}><img src={homeIcon} alt="" /><p>Home</p></NavLink>
            <NavLink to={'/activities'}><img src={activities} alt="" /><p>Activities</p></NavLink>
            <NavLink to={`/form`}><img src={create} alt="" /><p>Create</p></NavLink>
        </div>
    )
}