import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card(props) {
    return (
      <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
        <div className={styles.cardStyle}>
          <img src={props.flags} alt="flag" />
          <h1>{props.name}</h1>
          <h2>{props.continent}</h2>
        </div>
      </Link>
    );
  }