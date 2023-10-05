import styles from "./landing.module.css";
import {Link} from "react-router-dom";

export function LandingPage() {
  return (
    <div className= {styles.tittle}>
      <div className= {styles.button-wrapper}>
        <h1 className= {styles.tittle}><b>Proyecto Individual</b></h1>
        <h2 className= {styles.tittle}>Juan Manuel Rodriguez Hurtado</h2>
        <Link to = '/Home'>
          <button className={styles.button}>Countries</button>
        </Link>
      </div>
    </div>
  )
}