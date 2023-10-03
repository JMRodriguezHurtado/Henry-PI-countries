import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteActivity } from "../../redux/action";
import ActivityInt from "../../components/activityComponents/ActivityInt";


function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);

  const handleDelete = id => {
    if (window.confirm("Quieres borrar esta actividad?")) {
      dispatch(deleteActivity(id));
      window.location.reload(); 
    }
  };

  return (
    <div>
      <ActivityInt activities={activities} handleDelete={handleDelete} />
    </div>
  );
}

export default Activities;