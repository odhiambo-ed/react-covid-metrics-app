import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import { useDispatch } from 'react-redux';
import { addDate } from '../features/dateReducer';

const DateSelector = () => {
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addDate({
        from,
        to,
      }),
    );
  }, [from, to]);

  return (
    <div
      style={{
        backgroundColor: '#e3e6e4',
        padding: 25,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div>
        <p
          style={{
            color: 'blue',
          }}
        >
          From:
        </p>
        <DatePicker onChange={setFrom} value={from} />
      </div>
      <div>
        <p
          style={{
            color: 'blue',
          }}
        >
          To:
        </p>
        <DatePicker onChange={setTo} value={to} />
      </div>
    </div>
  );
};

export default DateSelector;
