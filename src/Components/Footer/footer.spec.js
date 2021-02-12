import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
import { BrowserRouter, Route } from 'react-router-dom';

describe('footer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/'} component={Footer} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});