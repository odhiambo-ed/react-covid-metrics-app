import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import '../App.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function BasicSelect({ name }) {
  return (
    <div className="layout">
      <h3 className="name">
        {name}
      </h3>
      <Link
        className="link"
        to={`/data/${name}`}
      >
        <ArrowCircleRightIcon />
      </Link>
    </div>
  );
}

BasicSelect.propTypes = {
  name: Proptypes.string.isRequired,
};
