import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

describe('Dashboard component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/dashboard'} component={Dashboard} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});