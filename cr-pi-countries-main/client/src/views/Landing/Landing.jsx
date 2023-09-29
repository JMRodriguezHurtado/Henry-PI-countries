import { Link } from "react-router-dom";

function Landing() {
    return (
      <div>Este elemento envuelve a todo lo que sigue
        <div>Este es un titulo Countries</div>
        <div>Esto envuelve los botones
          <Link to={"/home"}>
            <button>Home</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Landing;