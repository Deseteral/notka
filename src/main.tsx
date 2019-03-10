import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import * as Storage from './storage';

const repoData = Storage.read();

ReactDOM.render(
  <Dashboard repoData={repoData} />,
  document.getElementById('root'),
);
