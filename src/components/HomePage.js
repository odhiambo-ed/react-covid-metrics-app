import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCountries } from '../features/countriesReducer';

import '../App.css';
import CountrySelection from './CountrySelection';
import Naigation from './Navigation';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.value);

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
      <div className="mb-3 mt-3">
        <input
          type="email"
          className="form-control"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter country name to search..."
        />
      </div>
      {search.length > 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {countries
            .filter((val) => {
              if (val.name.toLowerCase().includes(search.toLowerCase())) {
                return val;
              }
              return '';
            })
            .map((val) => (
              <CountrySelection key={val.id} id={val.id} name={val.name} />
            ))}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {countries.map((item) => (
            <CountrySelection key={item.id} id={item.id} name={item.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
