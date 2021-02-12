import React from 'react';
import ReactDOM from 'react-dom';
import StoreDay from './StoreDay';
import { BrowserRouter, Route } from 'react-router-dom';

describe('StoreDay component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/day/:day_id'} component={StoreDay} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});