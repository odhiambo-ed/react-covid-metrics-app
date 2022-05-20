import React from 'react';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation = () => (
  <nav className="navbar navbar-light nav-c">
    <div className="container-fluid">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1193px-SARS-CoV-2_without_background.png?20210922032455"
        alt=""
        width="50"
        height="50"
        className="d-inline-block align-text-top"
        style={{
          borderRadius: 999,
        }}
      />
      <div>
        <MicIcon
          style={{
            color: 'white',
          }}
        />
        <SettingsIcon
          style={{
            color: 'white',
          }}
        />
      </div>
    </div>
  </nav>
);

export default Navigation;
