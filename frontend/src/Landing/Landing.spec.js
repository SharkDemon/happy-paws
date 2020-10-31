import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Landing from './Landing';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Landing />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>,
    );
  });
});