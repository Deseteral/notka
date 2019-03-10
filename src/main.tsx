import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import * as Storage from './storage';
import './styles.css';

const repoData = Storage.read();

ReactDOM.render(
  <Dashboard repoData={repoData} />,
  document.getElementById('root'),
);
