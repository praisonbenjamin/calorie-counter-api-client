import React from 'react';
import ReactDOM from 'react-dom';
import StoreMeal from './StoreMeal';
import { BrowserRouter, Route } from 'react-router-dom';

describe('StoreMeal component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/'} component={StoreMeal} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});