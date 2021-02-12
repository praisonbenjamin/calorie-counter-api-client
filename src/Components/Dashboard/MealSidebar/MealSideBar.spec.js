import React from 'react';
import ReactDOM from 'react-dom';
import MealSideBar from './MealSideBar';
import { BrowserRouter, Route } from 'react-router-dom';

describe('MealSideBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/dashboard'} component={MealSideBar} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});