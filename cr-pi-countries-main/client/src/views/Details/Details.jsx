import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useParams  from "react-router-dom";
import getCountryDetail from "../../redux/action";
import DetailInt from "../../components/detailComponents/DetailInt";

const Detail = () => {
    const dispatch = useDispatch();
    const countryBdd = useSelector((state) => state.countryDetail);
    const { detailId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedActivity, setSelectedActivity] = useState(null);
  
    useEffect(() => {
      dispatch(getCountryDetail(detailId));
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, [dispatch, detailId]);
  
    return (
      <div>
        <DetailInt
          isLoading={isLoading}
          countryBdd={countryBdd}
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
      </div>
    );
  };
  
  export default Detail;