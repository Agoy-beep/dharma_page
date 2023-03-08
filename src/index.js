import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

root.render(
    // <div className="container bg-trees bg-fixed">
      <App />,
    // </div>,
);
