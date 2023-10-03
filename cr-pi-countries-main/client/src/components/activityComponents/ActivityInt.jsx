import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ActivitiesWrapper, ActivitiesContainer,
         ActivityCard, ActivityInfo, 
         HomeButtonWrapper} from "./activityStyles"; 

         const ActivityInt = ({ activities, handleDelete }) => {
          return (
            <ActivitiesWrapper>
              <h1>Activities</h1>
              <ActivitiesContainer>
                {activities.map((activity, index) => (
                  <ActivityCard key={index}>
                    <button onClick={() => handleDelete(activity.id)}>X</button>
                    <h2>{activity.name}</h2>
                    <img src="" alt="" />
                    <ActivityInfo>
                      <p>Difficulty: {activity.difficulty}</p>
                      <p>Duration: {activity.duration} Hrs</p>
                      <p>Season: {activity.season}</p>
                      <p>Countries: {activity.countries}</p>
                    </ActivityInfo>
                  </ActivityCard>
                ))}
              </ActivitiesContainer>
              <HomeButtonWrapper>
                <Link to={"/home"}>
                  <button>Home</button>
                </Link>
              </HomeButtonWrapper>
            </ActivitiesWrapper>
          );
        };
        
        export default ActivityInt;