import React from 'react';
import ReactDOM from 'react-dom';
import AddDay from './AddDay';
import { BrowserRouter, Route } from 'react-router-dom';

describe('AddDay component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/addDay'} component={AddDay} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});