
import Countries from '../../components/cardsComponents/Cards'
import Filters from '../../components/Filters/Filters'
import SearchBar from '../../components/SearchBarComponent/searchBar'
import NavBar from '../../components/navBarComponents/navBar'
import style from './home.module.css'



export default function Home() {

    return(
       
        <div className={style.homePage}>
            <div className={style.homeAside}>
                <NavBar/>
                <SearchBar/>
                <Filters/>
            </div>
            <Countries/>
        </div>
    
    )
}