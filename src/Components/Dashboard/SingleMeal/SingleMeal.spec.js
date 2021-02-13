import React from 'react';
import ReactDOM from 'react-dom';
import SingleMeal from './SingleMeal';
import { BrowserRouter, Route } from 'react-router-dom';

describe('SingleMeal component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/'} component={SingleMeal} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});