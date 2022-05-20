import { configureStore } from '@reduxjs/toolkit';
import covidReducer from '../features/covidReducer';
import countriesReducer from '../features/countriesReducer';
import selectedCountryReducer from '../features/selectedCountryReducer';
import regionsReducer from '../features/regionsReducer';
import selectedRegionReducer from '../features/selectedRegionReducer';
import dateReducer from '../features/dateReducer';

const store = configureStore({
  reducer: {
    covid: covidReducer,
    countries: countriesReducer,
    country: selectedCountryReducer,
    regions: regionsReducer,
    region: selectedRegionReducer,
    date: dateReducer,
  },
});

export default store;
