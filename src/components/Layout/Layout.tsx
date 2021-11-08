import React from 'react';
import logo from './logo.svg';
import './Layout.css';
import { Spin } from 'antd';

function Layout() {
  return (
    <div className="Layout">
      <header className="Layout-header">
        <img src={logo} className="Layout-logo" alt="logo" />
        <p>
          Edit <code>src/Layout.tsx</code> and save to reload.
        </p>
        <Spin size="large" />
        <a
          className="Layout-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Layout;
