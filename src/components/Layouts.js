import React from 'react';
import Proptypes from 'prop-types';

const Layouts = ({ title, count }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#c7044f',
      margin: 10,
      padding: 10,
      borderRadius: 7,
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
      }}
    >
      <p
        className="title"
        style={{
          color: '#FFFFFF',
          alignSelf: 'center',
          fontWeight: 'bold',
        }}
      >
        {title}
      </p>
      <p
        className="title"
        style={{
          color: '#FFFFFF',
          fontWeight: 'bold',
        }}
      >
        {count}
      </p>
    </div>
  </div>
);

export default Layouts;

Layouts.propTypes = {
  title: Proptypes.string.isRequired,
  count: Proptypes.number.isRequired,
};
