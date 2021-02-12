import React from 'react';
import ReactDOM from 'react-dom';
import MealStorage from './MealStorage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('MealStorage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/dashboard'} component={MealStorage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});