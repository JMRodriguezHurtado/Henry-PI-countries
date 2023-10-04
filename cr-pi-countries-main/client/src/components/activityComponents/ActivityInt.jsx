
import {Link} from "react-router-dom"
import styles from "./activityInt.module.css"; 

         const ActivityInt = ({ activities, handleDelete }) => {
          return (
            <div className= {styles.activitiesWrapper}>
              <h1 className= {styles.h1}>Activities</h1>
              <div className={styles.activitiesContainer}>
                {activities.map((activity, index) => (
                  <div className={styles.activityCard} key={index}>
                    <button onClick={() => handleDelete(activity.id)}>X</button>
                    <h2>{activity.name}</h2>
                   
                    <div className={styles.activityInfo}>
                      <p>Difficulty: {activity.difficulty}</p>
                      <p>Duration: {activity.duration} Hrs</p>
                      <p>Season: {activity.season}</p>
                      <p>Countries: {activity.countries}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.homeButtonWrapper}>
                <Link to="/home">
                  <button>Home</button>
                </Link>
              </div>
            </div>
          );
        };
        
        export default ActivityInt;