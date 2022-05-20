import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navigation from './Navigation';
import Layouts from './Layouts';

const CovidData = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  const url = `https://api.covid19tracking.narrativa.com/api/2020-03-22/country/${params.name}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((final) => setData(Object.values(final.dates)[0].countries[`${params.name}`]));
  }, [params.name]);
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
            color: '#FFFFFF',
            alignSelf: 'flex-start',
          }}
          to="/"
        >
          <ArrowBackIcon />
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="card1"
      >
        <div className="covid-container">
          <h2
            className="card-header"
            style={{
              color: 'white',
            }}
          >
            {params.name}
          </h2>
          <Layouts title="Confirmed Cases Today" count={data.today_confirmed} />
          <Layouts title="Deaths Today" count={data.today_deaths} />
          <Layouts
            title="New Confirmed Cases"
            count={data.today_new_confirmed}
          />
          <Layouts title="New Dates" count={data.today_new_deaths} />
          <Layouts
            title="New Open Cases"
            count={data.today_new_open_cases}
          />
          <Layouts
            title="New Recovered"
            count={data.today_new_recovered}
          />
          <Layouts title="Open Cases" count={data.today_open_cases} />
          <Layouts title="Recovered Today" count={data.today_recovered} />
          <Layouts
            title="Today Vs Yesterday Confirmed"
            count={parseFloat(data.today_vs_yesterday_confirmed).toFixed(2)}
          />
          <Layouts
            title="Today Vs Yesterday Deaths"
            count={parseFloat(data.today_vs_yesterday_deaths).toFixed(2)}
          />
          <Layouts
            title="Today Vs Yesterday Open Cases"
            count={parseFloat(data.today_vs_yesterday_open_cases).toFixed(2)}
          />
          <Layouts
            title="Today Vs Yesterday Recovered"
            count={parseFloat(data.today_vs_yesterday_recovered).toFixed(2)}
          />
          <Layouts
            title="Yesterday Confirmed"
            count={data.yesterday_confirmed}
          />
          <Layouts title="Yesterday Deaths" count={data.yesterday_deaths} />
          <Layouts
            title="Yesterday Open Cases"
            count={data.yesterday_open_cases}
          />
          <Layouts
            title="Yesterday Recovered"
            count={data.yesterday_recovered}
          />
        </div>
      </div>
    </div>
  );
};

export default CovidData;
