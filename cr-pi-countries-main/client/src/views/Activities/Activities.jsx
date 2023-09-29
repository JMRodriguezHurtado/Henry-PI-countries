import React from "react";
import { connect } from "react-redux";
import { deleteActivity } from "../../redux/action";
import ActivityInt from "../../components/activityComponents/ActivityInt";

class Activities extends React.Component {
    constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this);
    }
  
    handleDelete(id) {
      if (window.confirm("Quieres borrar esta actividad?")) {
        this.props.deleteActivity(id);
        window.location.reload();
      }
    }
  
    render() {
      const { activities } = this.props;
      return (
        <div>
          <ActivityInt
            activities={activities}
            handleDelete={this.handleDelete}
          />
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    activities: state.activities,
  });
  
  const mapDispatchToProps = {
    deleteActivity,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Activities);