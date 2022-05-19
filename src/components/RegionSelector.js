import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addRegions } from '../features/regionsReducer';
import { addRegion } from '../features/selectedRegionReducer';

export default function BasicSelect({ refCountry }) {
  const [countryName, setCountryName] = useState('');
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions.value);

  useEffect(() => {
    fetch(
      `https://api.covid19tracking.narrativa.com/api/countries/${refCountry}/regions`,
    )
      .then((res) => res.json())
      .then((final) => {
        dispatch(addRegions(final.countries));
      });
  }, [refCountry]);

  const handleChange = (event) => {
    setCountryName(event.target.value);
    dispatch(addRegion(event.target.value));
  };

  return (
    <div
      style={{
        backgroundColor: '#e3e6e4',
        marginRight: 100,
        marginLeft: 100,
        padding: 25,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p>Select a region</p>
      {regions.length > 0 && (
        <Box sx={{ minWidth: 50, width: 200, backgroundColor: '#FFFFFF' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Region</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={countryName}
              label="Country"
              onChange={handleChange}
            >
              {Object.values(regions[0][0])[0].map((val) => (
                <MenuItem key={val.id} value={val.name}>
                  {val.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
    </div>
  );
}
BasicSelect.propTypes = {
  refCountry: PropTypes.string.isRequired,
};
