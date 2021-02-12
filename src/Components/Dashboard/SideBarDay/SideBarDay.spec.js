import React from 'react';
import ReactDOM from 'react-dom';
import SideBarDay from './SideBarDay';
import { BrowserRouter, Route } from 'react-router-dom';

describe('SideBarDay component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/day/:dayId'} component={SideBarDay} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});