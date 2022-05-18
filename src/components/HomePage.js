import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCountries } from '../features/countriesReducer';

import '../App.css';
import CountrySelection from './CountrySelection';
import RegionSelector from './RegionSelector';
import DateSelector from './DateSelector';
import Naigation from './Navigation';

const HomePage = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.value);
  const country = useSelector((state) => state.country.value);

  useEffect(() => {
    fetch('https://api.covid19tracking.narrativa.com/api/countries')
      .then((res) => res.json())
      .then((final) => {
        dispatch(addCountries(final.countries));
      });
  }, []);
  return (
    <div className="App">
      <Naigation />
      <h2
        style={{
          fontFamily: 'sans-serif',
          color: '#02c23b',
          marginTop: 30,
        }}
      >
        Covid 19 Daily Statistics Report
      </h2>
      <CountrySelection countriesList={countriesList} />
      {country.length > 0 && <RegionSelector refCountry={country} />}
      <DateSelector />
      <div
        style={{
          marginTop: 40,
        }}
      >
        <Link
          style={{
            textDecoration: 'none',
            color: '#FFFFFF',
            backgroundColor: 'blue',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
          }}
          to="/data"
        >
          View Data
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
