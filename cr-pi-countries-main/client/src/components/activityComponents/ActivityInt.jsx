import React, { Component } from "react";
import { Link } from "react-router-dom";

class ActivityInt extends Component {
    render() {
      const { activities, handleDelete } = this.props;

      return (
        <div>Este elemento esta envuelto a partir de aqui
          <h1>Activities</h1>
          <div>Este elemento contiene las cards
            {activities.map((activity, index) => (
              <div key={index}>Este elemento es la card
                <button onClick={() => handleDelete(activity.id)}>X</button>
                <h2>{activity.name}</h2>
                <img
                  src="https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/f/f2/latest/20160202180900/Kirby_SSB.png/800px-Kirby_SSB.png"
                  alt=""
                />
                <div>
                  <p>Difficulty: {activity.difficulty}</p>
                  <p>Duration: {activity.duration} Hrs</p>
                  <p>Season: {activity.season}</p>
                  <p>Countries: {activity.countries}</p>
                </div>
              </div>
            ))}
          </div>
          <div>Este elemento envuelve a los links, especificamente al boton de home
            <Link to={"/home"}>
              <button>Home</button>
            </Link>
          </div>
        </div>
      );
    }
  }
  
  export default ActivitiesBody;