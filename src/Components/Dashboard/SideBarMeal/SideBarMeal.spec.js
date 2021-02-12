import React from 'react';
import ReactDOM from 'react-dom';
import SideBarMeal from './SideBarMeal';
import { BrowserRouter, Route } from 'react-router-dom';

describe('SideBarMeal component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/meal/:meal_id'} component={SideBarMeal} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});