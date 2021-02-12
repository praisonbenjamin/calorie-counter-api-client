import React from 'react';
import ReactDOM from 'react-dom';
import AddMeal from './AddMeal';
import { BrowserRouter, Route } from 'react-router-dom';

describe('AddMeal component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/addMeal'} component={AddMeal} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});