import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

export default function BasicSelect({ id, name }) {
  return (
    <div
      style={{
        width: 600,
        backgroundColor: '#07002e',
        margin: 30,
        padding: 20,
      }}
    >
      <h1
        style={{
          color: 'white',
        }}
      >
        {name}
      </h1>
      <Link
        style={{
          textDecoration: 'underline',
          color: '#05f047',
        }}
        to={`/data/${name}`}
      >
        {id}
      </Link>
    </div>
  );
}

BasicSelect.propTypes = {
  id: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
};
