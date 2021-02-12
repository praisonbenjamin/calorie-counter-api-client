import React from 'react';
import ReactDOM from 'react-dom';
import MealList from './MealList';
import { BrowserRouter, Route } from 'react-router-dom';

describe('MealList component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/dashboard'} component={MealList} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});