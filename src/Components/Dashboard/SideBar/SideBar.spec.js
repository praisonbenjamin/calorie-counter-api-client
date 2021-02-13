import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './SideBar';
import { BrowserRouter, Route } from 'react-router-dom';

describe('SideBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/dashboard'} component={SideBar} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});