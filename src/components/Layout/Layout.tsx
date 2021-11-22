import React from 'react';
import './Layout.css';
import { Spin } from 'antd';

function Layout() {
  return (
    <div className="Layout">
      <header className="Layout-header">
        <Spin size="large" />
        <a
          className="Layout-link"
          href="https://pocket.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pocket Frontend
        </a>
      </header>
    </div>
  );
}

export default Layout;
