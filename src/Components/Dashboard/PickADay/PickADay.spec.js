import React from 'react';
import ReactDOM from 'react-dom';
import PickADay from './PickADay';
import { BrowserRouter, Route } from 'react-router-dom';

describe('PickADay component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/dashboard'} component={PickADay} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});