import { Link } from "react-router-dom";
import styles from "./landing.module.css";

function Landing() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Countries</div>
        <div className={styles.button-wrapper}>
          <Link to={"/home"}>
            <button className={styles.button}>Home</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Landing;