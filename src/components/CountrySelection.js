import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addCountry } from '../features/selectedCountryReducer';

export default function BasicSelect({ countriesList }) {
  const [countryName, setCountryName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCountryName(event.target.value);
    dispatch(addCountry(event.target.value));
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
      <p>Select a country</p>
      {countriesList.length > 0 && (
        <Box sx={{ minWidth: 50, width: 200, backgroundColor: '#FFFFFF' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={countryName}
              label="Country"
              onChange={handleChange}
            >
              {countriesList.map((val) => (
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
  countriesList: PropTypes.string.isRequired,
};
