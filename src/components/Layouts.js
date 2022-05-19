import React from 'react';
import Proptypes from 'prop-types';

const Layouts = ({ title, count }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#010342',
    margin: 10,
    padding: 10,
    borderRadius: 7,
  }}
  >
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
    }}
    >
      <p style={{
        color: '#05ed2f',
        alignSelf: 'center',
      }}
      >
        {title}
      </p>
      <p style={{
        color: '#FFFFFF',
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
