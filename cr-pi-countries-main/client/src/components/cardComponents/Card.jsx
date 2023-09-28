import { Link } from "react-router-dom";

export default function Card(props) {
    return (
      <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
        <div> Este elemento esta dentro de la card
          <img src={props.flags} alt="flag" />
          <h1>{props.name}</h1>
          <h2>{props.continent}</h2>
        </div>
      </Link>
    );
  }