import React from "react";
import { useSelector } from "react-redux";

export  const countries = useSelector(state => state.allCountries);