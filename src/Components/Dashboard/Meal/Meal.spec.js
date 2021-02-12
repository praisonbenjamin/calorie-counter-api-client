import React from 'react';
import ReactDOM from 'react-dom';
import Meal from './Meal';
import { BrowserRouter, Route } from 'react-router-dom';

describe('Meal component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/dashboard'} component={Meal} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});