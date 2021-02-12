import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';
import { BrowserRouter, Route } from 'react-router-dom';

describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/not-found'} component={NotFound} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});