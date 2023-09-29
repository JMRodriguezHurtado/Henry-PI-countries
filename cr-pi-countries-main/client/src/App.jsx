import { Routes, Route, useLocation } from "react-router-dom";
import {Activities, Details, Form, Home, Landing} from "./views/viewsExports";
import {NavBar} from "./components/componentsExports"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getActivities } from "./redux/action";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className="App">
      <div>{pathname === "/home" && <NavBar />}</div>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:detailId" element={<Details />} />
        <Route path="/form" element={<Form />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;