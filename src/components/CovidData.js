import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import Layouts from './Layouts';

const CovidData = () => {
  const [data, setData] = useState([]);

  const country = useSelector((state) => state.country.value);
  const region = useSelector((state) => state.region.value);
  const date = useSelector((state) => state.date.value);

  const url = `https://api.covid19tracking.narrativa.com/api/country/${country}/region/${region}?date_from=${date[0].from}&date_to=${date[0].to}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((final) => setData(final.total));
  }, []);
  return (
    <div className="App">
      <Navigation />
      <div
        style={{
          marginTop: 40,
          marginBottom: 40,
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
          to="/"
        >
          Go Back
        </Link>
      </div>
      <div className="card">
        <h5
          className="card-header"
          style={{
            color: 'green',
          }}
        >
          {country}
          {' '}
          -
          {' '}
          <span
            style={{
              color: 'orangered',
            }}
          >
            {region}
          </span>
        </h5>
        <div
          className="card-body"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Layouts title="today_confirmed" count={data.today_confirmed} />
          <Layouts title="today_deaths" count={data.today_deaths} />
          <Layouts
            title="today_new_confirmed"
            count={data.today_new_confirmed}
          />
          <Layouts title="today_new_deaths" count={data.today_new_deaths} />
          <Layouts
            title="today_new_open_cases"
            count={data.today_new_open_cases}
          />
          <Layouts
            title="today_new_recovered"
            count={data.today_new_recovered}
          />
          <Layouts title="today_open_cases" count={data.today_open_cases} />
          <Layouts title="today_recovered" count={data.today_recovered} />
          <Layouts
            title="today_vs_yesterday_confirmed"
            count={data.today_vs_yesterday_confirmed}
          />
          <Layouts
            title="today_vs_yesterday_deaths"
            count={data.today_vs_yesterday_deaths}
          />
          <Layouts
            title="today_vs_yesterday_open_cases"
            count={data.today_vs_yesterday_open_cases}
          />
          <Layouts
            title="today_vs_yesterday_recovered"
            count={data.today_vs_yesterday_recovered}
          />
          <Layouts
            title="yesterday_confirmed"
            count={data.yesterday_confirmed}
          />
          <Layouts title="yesterday_deaths" count={data.yesterday_deaths} />
          <Layouts
            title="yesterday_open_cases"
            count={data.yesterday_open_cases}
          />
          <Layouts
            title="yesterday_recovered"
            count={data.yesterday_recovered}
          />
        </div>
      </div>
    </div>
  );
};

export default CovidData;
